import db from "#configs/database.js";

const TABLE = "cart";
/**
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 * @returns {import("knex").Knex.QueryBuilder}
 */
function baseQuery(trx = db) {
  return trx(TABLE);
}

export async function findCartByAccountId(id, trx = db) {
  const cart = await baseQuery(trx).where("account_id", "=", id).orWhere("guest_token", "=", id).first();
  if (!cart) {
    return null;
  }
  const cartItems = await trx("cart_item").where("cart_id", "=", cart.id).select("*");
  cart.items = cartItems;
  return cart;
}

export async function createCart(user, trx = db) {
  let cart;
  if (user.guest) {
    [cart] = await baseQuery(trx).insert({ guest_token: user.id }).returning("*");
  } else {
    [cart] = await baseQuery(trx).insert({ account_id: user.id }).returning("*");
  }
  return cart;
}
