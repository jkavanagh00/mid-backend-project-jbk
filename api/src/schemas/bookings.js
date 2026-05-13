import { z } from "zod";

export const BookingIdParams = z.object({
  id: z.coerce.number().int().positive("Booking ID must be a positive integer"),
});