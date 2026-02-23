import { loginResponseSchema } from "~components/lib/loginResponseSchema";
import type { TSignInFormType } from "~components/lib/signInValidationSchema";
import apiClient from "~utils/axiosApiClient";

import type { LoginRequest, LoginResponse } from "./urls";
import { mapLoginFormToLoginRequest } from "./urls";

export const login = async (form: TSignInFormType): Promise<LoginResponse> => {
  const body: LoginRequest = mapLoginFormToLoginRequest(form);

  const response = await apiClient.post<unknown, LoginRequest>("/auth/login", body);

  return loginResponseSchema.parse(response);
};
