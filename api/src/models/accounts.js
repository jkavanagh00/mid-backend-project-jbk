import db from "#configs/database.js";

const TABLE = "account";
/**
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 * @returns {import("knex").Knex.QueryBuilder}
 */
function baseQuery(trx = db) {
  return trx(TABLE);
}

/**
 * Count accounts using optional filters
 *
 * @param {Object} [filters={}]
 * @param {Object} [options={}]
 * @param {import("knex")} [options.trx] - Optional transaction
 *
 * @returns {Promise<number>} Total matching rows
 */
export async function countAccounts(filters = {}, options = {}) {
  const qb = baseQuery(options.trx);
  await applyAccountFilters(qb, filters);
  await applyOptions(qb, options);
  const totalRows = await countTableRows(qb);
  return Number(totalRows);
}

/**
 * List accounts with optional filters and offset-based pagination
 *
 * NOTE:
 * - Supports limit + offset only
 * - Page calculation should be handled at API/controller level
 *
 * @param {Object} [filters]
 * @param {string} [filters.createdAt]
 * @param {string} [filters.updatedAt]
 * @param {string} [filters.search]
 *
 * @param {Object} [options={}]
 * @param {number} [options.limit]
 * @param {number} [options.offset]
 * @param {string} [options.orderBy="id"]
 * @param {"asc"|"desc"} [options.order="asc"]
 * @param {import("knex").Knex} [options.trx]
 *
 * @returns {Promise<Array<Object>>}
 */
export async function listAccounts(filters = {}, options = {}) {
  const qb = baseQuery(options.trx).select("*");
  await applyAccountFilters(qb, filters);
  await applyOptions(qb, options);
  return qb;
}

/**
 * Find a single account by email.
 *
 * @param {string} email
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx]
 *
 * @returns {Promise<Object|null>}
 */
export async function findAccountByEmail(email, { trx } = {}) {
  const row = await baseQuery(trx).where({ email }).first();

  return row ?? null;
}

/**
 * Find a single account by id.
 *
 * @param {number|string} id
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx]
 *
 * @returns {Promise<Object|null>}
 */
export async function findAccountById(id, { trx } = {}) {
  const row = await baseQuery(trx).where({ id }).first();

  return row ?? null;
}

/**
 * Create a new account.
 *
 * @param {string} name
 * @param {string} email
 * @param {string} phone
 * @param {string} password
 * @param {Object} [options={}]
 *
 * @returns {Promise<Object|null>} The created account
 */
export async function createAccount(accountData, options = {}) {
  const { name, email, phone, password } = accountData;

  const createdAccount = await baseQuery(options.trx)
    .insert({
      name,
      email,
      phone,
      password,
    })
    .returning("*");

  return createdAccount[0] ?? null;
}

/**
 * Update an existing account by id.
 *
 * @param {number} id
 * @param {Object} updateData
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx]
 *
 * @returns {Promise<Object|null>}
 */
export async function updateAccount(id, updateData, options = {}) {
  const updated = await baseQuery(options.trx)
    .where({ id })
    .update(updateData)
    .returning("*");
  return updated[0] ?? null;
}

/**
 * Delete an existing account by id.
 *
 * @param {number|string} id
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx]
 *
 * @returns {Promise<Object|null>}
 */
export async function deleteAccount(id, options = {}) {
  const deleted = await baseQuery(options.trx)
    .where({ id })
    .del()
    .returning("*");

  return deleted[0] ?? null;
}
