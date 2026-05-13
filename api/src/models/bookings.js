import db from "#configs/database.js";
import { findCartByAccountId, updateCartStatus } from "#models/carts.js";

const TABLE = "booking";
/**
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 * @returns {import("knex").Knex.QueryBuilder}
 */
function baseQuery(trx = db) {
  return trx(TABLE);
}

export async function listBookingsByAccountId(accountId, trx = db) {
    const bookings = await baseQuery(trx).where("account_id", "=", accountId);
    const itemizedBookings = await Promise.all(
      bookings.map(async (booking) => {
        const items = await trx("booking_item").where("booking_id", "=", booking.id).select("*");
        return {...booking, items: items ?? []};
      })
    );
    return itemizedBookings;
}

export async function findBookingById(bookingId, trx = db) {
    const booking = await baseQuery(trx).where("id", "=", bookingId).first();
    if (!booking) {
        return null;
    }
    const bookingItems = await trx("booking_item").where("booking_id", "=", bookingId).select("*");
    return { ...booking, items: bookingItems ?? [] };
} 

/**
 * Creates a new booking for an account.
 *
 * @param {number} account_id - The account's id.
 * @param {string} [status="pending"] - The initial booking status.
 * @param {import("knex").Knex} [trx=db] - Optional transaction.
 *
 * @returns {Promise<object>} The created booking.
 */
export async function createBooking(account_id, status = "pending", trx = db) {
  const bookingData = { account_id, status };
  const [booking] = await baseQuery(trx).insert(bookingData).returning("*");
  return booking;
}

export async function convertCartToBooking(accountId, trx) {
  const cart = await findCartByAccountId(accountId, trx);

  if (!cart) {
    throw new Error("Cart not found");
  }

  if (!cart.items || cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  const booking = await createBooking(accountId, "pending", trx);
  const bookingId = booking.id;

  const bookingItemsData = cart.items.map((item) => ({
    booking_id: bookingId,
    event_id: item.event_id,
    quantity: item.quantity,
    unit_price: item.unit_price,
  }));

  await updateCartStatus(cart.id, "checked_out", trx);
  await trx("booking_item").insert(bookingItemsData);
  return booking;
}

/**
 * Deletes a booking by its id.
 *
 * @param {number} bookingId - The ID of the booking to delete.
 * @param {import("knex").Knex} [trx=db] - Optional transaction.
 *
 * @returns {Promise<void>}
 */
export async function deleteBookingById(bookingId, trx = db) {
  await baseQuery(trx).where("id", "=", bookingId).del();
}
