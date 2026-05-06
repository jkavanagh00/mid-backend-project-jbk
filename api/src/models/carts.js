import db from "#configs/database.js";

const TABLE = "cart";
/**
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 * @returns {import("knex").Knex.QueryBuilder}
 */
function baseQuery(trx = db) {
  return trx(TABLE);
}

export async function findCartByAccountId(id, trx = {}) {
  const cart = await baseQuery(trx).where("account_id", "=", id).first();
  return cart ?? null;
}
