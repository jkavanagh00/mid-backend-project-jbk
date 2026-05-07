import db from "#configs/database.js";

const TABLE = "cart_item";
/**
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 * @returns {import("knex").Knex.QueryBuilder}
 */
function baseQuery(trx = db) {
  return trx(TABLE);
}

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

  return item[0];
}

export async function updateCartItemQuantity(cartItemId, quantity, trx = db) {
  const item = await baseQuery(trx)
    .where("id", "=", cartItemId)
    .update({
      quantity,
    })
    .returning("*");

  return item[0];
}
