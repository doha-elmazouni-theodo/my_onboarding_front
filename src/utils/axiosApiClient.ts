import { logAndGetUnknownError, throwError } from "./axiosErrorHelper";

import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import qs from "query-string";

type ClientRequestConfig = {
  params?: Record<string, unknown>;
  paramsSerializer?: (params: Record<string, unknown>) => string;
};
export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  retry?: boolean;
}
const API_BASE_URL = process.env["NEXT_PUBLIC_API_BASE_URL"] ?? "";

const instance = axios.create({
  baseURL: API_BASE_URL,
  paramsSerializer: qs.stringify,
  withCredentials: true,
});

instance.interceptors.response.use(
  (res) => res,
  async (error: unknown) => {
    if (!axios.isAxiosError(error)) {
      return Promise.reject(logAndGetUnknownError(error));
    }

    const originalRequest = error.config as CustomAxiosRequestConfig | undefined;
    const status = error.response?.status;

    if (
      originalRequest !== undefined &&
      typeof status === "number" &&
      [401, 403].includes(status) &&
      !(originalRequest.retry ?? false)
    ) {
      originalRequest.retry = true;

      await instance.post("/auth/refreshToken");

      return instance(originalRequest);
    }

    return Promise.reject(throwError(error));
  },
);

async function get<TData>(path: string, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.get<TData>(path, config);
  return data;
}

async function post<TData, TBody>(path: string, body?: TBody, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.post<TData>(path, body, config);
  return data;
}

async function deleteHttpMethod<TData>(path: string, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.delete<TData>(path, config);
  return data;
}

async function put<TData, TBody>(path: string, body?: TBody, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.put<TData>(path, body, config);
  return data;
}

async function patch<TData, TBody>(path: string, body?: TBody, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.patch<TData>(path, body, config);
  return data;
}

const apiClient = {
  get,
  post,
  delete: deleteHttpMethod,
  put,
  patch,
};
export default apiClient;
