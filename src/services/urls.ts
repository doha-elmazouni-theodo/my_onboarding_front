import type { loginResponseSchema } from "~components/lib/loginResponseSchema";
import type { TSignInFormType } from "~components/lib/signInValidationSchema";

import type z from "zod";

export type LoginRequest = {
  email: string;
  password: string;
};
export type LoginResponse = z.infer<typeof loginResponseSchema>;
export const mapLoginFormToLoginRequest = (form: TSignInFormType): LoginRequest => form;
