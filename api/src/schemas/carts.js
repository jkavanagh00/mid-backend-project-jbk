import { z } from "zod";

export const CartInput = z.object({
  accountId: z.coerce
    .number()
    .int()
    .min(1, "Account ID must be a positive integer"),
});

export const CartIdParams = z.object({
  id: z.coerce.number().int().positive("Cart ID must be a positive integer"),
});