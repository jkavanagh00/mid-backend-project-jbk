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

export const CartOutput = z.object({
  id: z.number().int().positive(),
  account_id: z.number().int().positive(),
  status: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  guest_token: z.string().nullable(),
  items: z.array(
    z.object({
      id: z.number().int().positive(),
      event_id: z.number().int().positive(),
      cart_id: z.number().int().positive(),
      quantity: z.number().int().positive(),
      unit_price: z.string(),
      created_at: z.string(),
      updated_at: z.string(),
    })
  ),
});
