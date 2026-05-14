import db from "#configs/database.js";
import { convertCartToBooking, listBookingsByAccountId, findBookingById } from "#models/bookings.js";
import { BookingIdParams } from "#schemas/bookings.js";

export async function checkoutCart(req, res, next) {
  try {
    const accountId = req.user.id;
    const booking = await db.transaction((trx) =>
      convertCartToBooking(accountId, trx),
    );
    res.status(200).json({ message: "Booking created successfully", booking });
  } catch (error) {
    next(error);
  }
}

export async function getBookings(req, res, next) {
  try {
    const accountId = req.user.id;
    const bookings = await listBookingsByAccountId(accountId);
    res.status(200).json({ bookings });
  } catch (error) {
    next(error);
  }
}

export async function getBookingById(req, res, next) {
  try {
    const bookingIdParams = BookingIdParams.parse(req.params);
    const bookingId = bookingIdParams.id;
    const booking = await findBookingById(bookingId);
    if (!booking || booking.account_id !== req.user.id) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.status(200).json({ booking });
  } catch (error) {
    next(error);
  }
}