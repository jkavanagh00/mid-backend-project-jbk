import { z } from "zod";

export const CartItemIdParams = z.object({
  id: z.coerce.number().int().positive("Cart item ID must be a positive integer"),
});

export const CartItemInput = z.object({
  eventId: z.coerce
    .number()
    .int()
    .min(1, "Event ID must be a positive integer"),
  quantity: z.coerce.number().int().min(1, "Quantity must be at least 1"),
});

export const CartItemUpdateInput = z.object({
  quantity: z.coerce.number().int().min(1, "Quantity must be at least 1"),
});