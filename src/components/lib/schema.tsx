import { z } from "zod";

export const lastLoggedInUserSchema = z.string().nullable();
export type LastLoggedInUserType = z.infer<typeof lastLoggedInUserSchema>;
