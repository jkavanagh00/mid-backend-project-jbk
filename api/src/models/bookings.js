import db from "#db/index.js";

const TABLE = "booking";
/**
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 * @returns {import("knex").Knex.QueryBuilder}
 */
function baseQuery(trx = db) {
  return trx(TABLE);
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
  const [booking] = await baseQuery(trx)
    .insert(bookingData)
    .returning("*");
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