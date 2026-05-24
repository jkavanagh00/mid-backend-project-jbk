import db from "#configs/database.js";
import { countTableRows, applyEventFilters, applyOptions } from "#utils/db.js";

const TABLE = "event";

/**
 * Event model (MVC example)
 *
 * This file intentionally demonstrates how a model file can group multiple
 * database actions for the same domain entity inside an MVC-style structure.
 *
 * The trainee is not expected to already be familiar with MVC as a pattern,
 * but they are expected to continue working within the structure established
 * by this skeleton.
 *
 * For that reason, this file serves two purposes:
 * 1. provide working examples of how model functions are organized
 * 2. show the expected shape of a model as the project grows
 *
 * Important:
 * - Not every function in this file is part of the required trainee scope
 * - Some functions are included as placeholders to demonstrate structure only
 * - Optional placeholders should only be implemented if the trainee chooses
 *   to work on additional / optional features
 */

/**
 * Returns a base query builder for the event table.
 *
 * @param {import("knex").Knex} [trx=db] - Optional transaction
 * @returns {import("knex").Knex.QueryBuilder}
 */
function baseQuery(trx = db) {
  return trx(TABLE);
}

/**
 * Count events matching optional filters.
 *
 * @param {Object} [filters={}]
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx] - Optional transaction
 *
 * @returns {Promise<number>} Total matching rows
 */
export async function countEvents(filters = {}, options = {}) {
  // Only apply filters, not options (no orderBy/limit/offset for counts)
  const qb = baseQuery(options.trx);
  await applyEventFilters(qb, filters);
  const totalRows = await countTableRows(qb);
  return Number(totalRows);
}

/**
 * List events with optional filters and offset-based pagination.
 *
 * NOTE:
 * - Supports limit + offset only
 * - Page calculation should be handled at API/controller level
 *
 * @param {Object} [filters={}]
 * @param {string} [filters.currency]
 * @param {number} [filters.minPrice]
 * @param {number} [filters.maxPrice]
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
export async function listEvents(filters = {}, options = {}) {
  const qb = baseQuery(options.trx).select("*");
  await applyEventFilters(qb, filters);
  await applyOptions(qb, options);
  return qb;
}

/**
 * Find a single event by id.
 *
 * @param {number|string} id
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx]
 *
 * @returns {Promise<Object|null>}
 */
export async function findEventById(id, { trx } = {}) {
  const row = await baseQuery(trx).where({ id }).first();

  return row ?? null;
}

/**
 * Create a new event.
 *
 * @param {string} title
 * @param {string} venue
 * @param {string} starts_at
 * @param {string} description
 * @param {number} price
 * @param {string} currency
 * @param {number} total_tickets
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx]
 *
 * @return {Promise<Object>} The created event
 */
export async function createEvent(eventData, options = {}) {
  const {
    title,
    venue,
    starts_at,
    description,
    price,
    currency,
    total_tickets,
  } = eventData;

  const createdEvent = await baseQuery(options.trx)
    .insert({
      title,
      venue,
      starts_at,
      description,
      price,
      currency,
      total_tickets,
    })
    .returning("*");

  return createdEvent[0];
}

/**
 * @param {number} id
 * @param {Object} updateData
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx]
 *
 * @returns {Promise<Object|null>} The updated event
 */
export async function updateEvent(id, updateData, options = {}) {
  const updated = await baseQuery(options.trx)
    .where({ id })
    .update(updateData)
    .returning("*");
  return updated[0] ?? null;
}

/**
 * Delete the event with the given id.
 *
 * @param {number|string} id
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx]
 *
 * @returns {Promise<Object|null>}
 */
export async function deleteEvent(id, options = {}) {
  const deleted = await baseQuery(options.trx)
    .where({ id })
    .del()
    .returning("*");

  return deleted[0] ?? null;
}
