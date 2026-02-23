import z from "zod";
import { loginResponseSchema } from "~components/lib/loginResponseSchema";
import type { TSignInFormType } from "~components/lib/signInValidationSchema";

export type LoginRequest = {
  email: string;
  password: string;
};
export type LoginResponse = z.infer<typeof loginResponseSchema>;
export const mapLoginFormToLoginRequest = (form: TSignInFormType): LoginRequest => form;
