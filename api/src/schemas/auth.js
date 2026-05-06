export { z } from "zod";

export const LoginParams = z.object({
  email: z.string().email(),
  password: z
    .string()
    .trim()
    .min(8, "password must have at least 8 characters"),
});
