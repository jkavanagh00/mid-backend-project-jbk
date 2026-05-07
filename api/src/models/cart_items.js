import db from "#configs/database.js";

const TABLE = "cart_item";
/**
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 * @returns {import("knex").Knex.QueryBuilder}
 */
function baseQuery(trx = db) {
  return trx(TABLE);
}

/**
 * Inserts an item into a cart.
 *
 * @param {number} cartId - The cart's id.
 * @param {number} eventId - The event's id.
 * @param {number} quantity - Number of items to add.
 * @param {number} unitPrice - Price per item.
 * @param {import("knex").Knex} [trx=db] - Optional transaction.
 *
 * @returns {Promise<object|null>} The inserted cart item, or null if insertion fails.
 *
 * Note: Function parameters are in camelCase, while DB fields are in snake_case.
 */
export async function insertCartItem(
  cartId,
  eventId,
  quantity,
  unitPrice,
  trx = db,
) {
  const item = await baseQuery(trx)
    .insert({
      cart_id,
      event_id,
      quantity,
      unit_price,
    })
    .returning("*");

  return item[0] ?? null;
}

/**
 * Updates the quantity of a single cart item.
 *
 * @param {number} cartItemId - The ID of the cart item to update.
 * @param {number} quantity - The new quantity value.
 * @param {import("knex").Knex} [trx=db] - Optional transaction.
 *
 * @returns {Promise<object|null>} The updated cart item, or null if not found.
 */
export async function updateCartItemQuantity(cartItemId, quantity, trx = db) {
  const item = await baseQuery(trx)
    .where("id", "=", cartItemId)
    .update({
      quantity,
    })
    .returning("*");

  return item[0] ?? null;
}
