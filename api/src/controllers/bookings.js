import db from "#configs/database.js";
import { convertCartToBooking } from "#models/bookings.js";

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
