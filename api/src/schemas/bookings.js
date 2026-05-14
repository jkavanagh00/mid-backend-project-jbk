import { z } from "zod";

export const BookingIdParams = z.object({
  id: z.coerce.number().int().positive("Booking ID must be a positive integer"),
});

export const BookingOutput = z.object({
  id: z.number().int().positive(),
  account_id: z.number().int().positive(),
  status: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  items: z.array(
    z.object({
      id: z.number().int().positive(),
      booking_id: z.number().int().positive(),
      event_id: z.number().int().positive(),
      quantity: z.number().int().positive(),
      unit_price: z.string(),
      created_at: z.string(),
    })
  ),
});

export const BookingsListOutput = z.object({
  bookings: z.array(BookingOutput),
});