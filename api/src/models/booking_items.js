import db from "#config/db.js";

const TABLE = "booking_item";
/**
 * @param {import("knex").Knex } [trx=db] - Optional transaction
 * @returns {import("knex").Knex.QueryBuilder}
 */
function baseQuery(trx = db) {
  return trx(TABLE);
}

/**
 * Inserts an item into a booking.
 *
 * @param {object} bookingItemData - The booking item data to insert.
 * @param {number} bookingItemData.booking_id - The booking's id.
 * @param {number} bookingItemData.event_id - The event's id.
 * @param {number} bookingItemData.quantity - Number of items.
 * @param {number} bookingItemData.unit_price - Price per item.
 * @param {import("knex").Knex} [trx=db] - Optional transaction.
 *
 * @returns {Promise<object|null>} The inserted booking item, or null if insertion fails.
 */
export async function insertBookingItem(bookingItemData, trx = db) {
  const item = await baseQuery(trx)
    .insert(bookingItemData)
    .returning("*");
  return item[0] ?? null;
}

/**
 * Updates the quantity of a single booking item.
 *
 * @param {number} bookingItemId - The ID of the booking item to update.
 * @param {number} quantity - The new quantity value.
 * @param {import("knex").Knex} [trx=db] - Optional transaction.
 *
 * @returns {Promise<object|null>} The updated booking item, or null if not found.
 */
export async function updateBookingItemQuantity(bookingItemId, quantity, trx = db) {
  const item = await baseQuery(trx)
    .where("id", "=", bookingItemId)
    .update({
      quantity,
    })
    .returning("*");
  return item[0] ?? null;
}