import type { TSignInFormType } from "~components/lib/signInValidationSchema";
import type BaseError from "~errors/BaseError";
import { login } from "~services/signin.service";
import type { LoginResponse } from "~services/urls";

import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";

type UseLoginMutationArgs = {
  onSuccess?: (data: LoginResponse) => void;
  onError?: (error: BaseError) => void;
};

export const useLoginMutation = ({
  onSuccess,
  onError,
}: UseLoginMutationArgs): UseMutationResult<LoginResponse, BaseError, TSignInFormType> => {
  const options: UseMutationOptions<LoginResponse, BaseError, TSignInFormType> = {
    mutationFn: login,
  };

  if (onSuccess !== undefined) {
    options.onSuccess = (data: LoginResponse) => {
      onSuccess(data);
    };
  }

  if (onError !== undefined) {
    options.onError = (error: BaseError) => {
      onError(error);
    };
  }

  return useMutation(options);
};
