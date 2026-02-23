import BaseError from "~errors/BaseError";

import { enqueueSnackbar } from "./notistackRef";

import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

const enqueueErrorsOnSnacks = (error: unknown) => {
  if (error instanceof BaseError) {
    enqueueSnackbar(error, { variant: "error" });
  }
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      enqueueErrorsOnSnacks(error);
    },
  }),

  mutationCache: new MutationCache({
    onError: (error) => {
      enqueueErrorsOnSnacks(error);
    },
  }),

  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});
