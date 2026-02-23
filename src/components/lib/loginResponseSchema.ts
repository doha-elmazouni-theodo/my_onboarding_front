import { z } from "zod";
import BaseError from "~errors/BaseError";

const baseErrorSchema = z
  .object({
    errorCode: z.string(),
    message: z.string(),
  })

  .transform(({ errorCode, message }) => new BaseError(errorCode, message));

export const loginResponseSchema = z.discriminatedUnion("success", [
  z.object({
    success: z.literal(false),
    error: baseErrorSchema,
  }),
  z.object({
    success: z.literal(true),
    accessToken: z.string(),
    refreshToken: z.string(),
    user: z.object({
      email: z.string(),
      fullname: z.string(),
    }),
  }),
]);
