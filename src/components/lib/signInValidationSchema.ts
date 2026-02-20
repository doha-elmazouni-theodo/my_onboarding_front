import txKeys from "~i18n/translations";

import { z } from "zod";

export const signInValidationSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: txKeys.errors.emailRequired })
    .email({ message: txKeys.errors.emailInvalid })
    .refine((value) => value.toLowerCase().endsWith("@theodo.com"), {
      message: txKeys.errors.emailMustEndWithTheodo,
    }),

  password: z
    .string()
    .min(1, { message: txKeys.errors.passwordRequired })
    .min(4, { message: txKeys.errors.passwordTooShort }),
});

export type TSignInFormType = z.infer<typeof signInValidationSchema>;

export const defaultSignInFormValues: TSignInFormType = {
  email: "",
  password: "",
};
