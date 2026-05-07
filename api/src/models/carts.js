import db from "#configs/database.js";

const TABLE = "cart";
/**
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 * @returns {import("knex").Knex.QueryBuilder}
 */
function baseQuery(trx = db) {
  return trx(TABLE);
}

/**
 * Find a cart by its account_id or guest_token
 *
 * @param {number} id account_id or guest_token
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 *
 * @returns {Promise<object|null>} The found cart or null if not found.
 */
export async function findCartByAccountId(id, trx = db) {
  const cart = await baseQuery(trx)
    .where("account_id", "=", id)
    .orWhere("guest_token", "=", id)
    .first();
  if (!cart) {
    return null;
  }
  const cartItems = await trx("cart_item")
    .where("cart_id", "=", cart.id)
    .select("*");
  cart.items = cartItems;
  return cart;
}

/**
 * Create a new cart.
 *
 * @param {object} user
 * @param {number} user.id - user id or guest token
 * @param {boolean} user.guest - true if user is a guest
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 *
 * @returns {Promise<Object|null>} The created cart, or null if creation fails.
 */
export async function createCart(user, trx = db) {
  let cart;
  if (user.guest) {
    [cart] = await baseQuery(trx)
      .insert({ guest_token: user.id })
      .returning("*");
  } else {
    [cart] = await baseQuery(trx)
      .insert({ account_id: user.id })
      .returning("*");
  }
  return cart;
}
