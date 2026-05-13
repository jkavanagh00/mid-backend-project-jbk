import { z } from "zod";

export const BookingItemIdParams = z.object({
  id: z.coerce.number().int().positive("Booking item ID must be a positive integer"),
});

export const BookingItemInput = z.object({
  bookingId: z.coerce
    .number()
    .int()
    .positive("Booking ID must be a positive integer"),
  eventId: z.coerce
    .number()
    .int()
    .positive("Event ID must be a positive integer"),
  quantity: z.coerce
    .number()
    .int()
    .positive("Quantity must be a positive integer"),
  unitPrice: z.coerce
    .number()
    .min(0, "Unit price must be a positive number"),
});

export const BookingItemUpdateInput = z.object({
  quantity: z.coerce
    .number()
    .int()
    .positive("Quantity must be a positive integer"),
});