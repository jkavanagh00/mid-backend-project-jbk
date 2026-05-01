import db from "#configs/database.js";

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
 * This is a working example of a model-layer function used by the controller
 * to support API response metadata such as totalItems / totalPages.
 *
 * @param {Object} [filters={}]
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx] - Optional transaction
 *
 * @returns {Promise<number>} Total matching rows
 */
export async function countEvents(filters = {}, options = {}) {
    const { trx } = options;
    const qb = baseQuery(trx);

    // TODO (required project work): apply supported filters when filter features are implemented

    const row = await qb.count({ count: "*" }).first();
    const count = row?.count ?? row?.["count(*)"] ?? 0;

    return Number(count);
}

/**
 * List events with optional filters and offset-based pagination.
 *
 * This is a working example of a model-layer "read many" function.
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
    const {
        limit,
        offset,
        orderBy = "id",
        order = "asc",
        trx,
    } = options;

    const qb = baseQuery(trx).select("*");

    const { currency, minPrice, maxPrice, search } = filters;

    if (currency) {
        qb.where("currency", "=", currency);
    }

    if (minPrice) {
        qb.where("price", ">=", minPrice);
    }

    if (maxPrice) {
        qb.where("price", "<=", maxPrice);
    }

    if (search) {
        qb.where(function () {
            this.where("title", "ilike", `%${search}%`)
                .orWhere("description", "ilike", `%${search}%`)
                .orWhere("venue", "ilike", `%${search}%`);
        });
    }

    qb.orderBy(
        orderBy,
        String(order).toLowerCase() === "desc" ? "desc" : "asc"
    );

    if (Number.isInteger(limit) && limit > 0) {
        qb.limit(limit);
    }

    if (Number.isInteger(offset) && offset >= 0) {
        qb.offset(offset);
    }

    return qb;
}

/**
 * Find a single event by id.
 *
 * This is a working example of a model-layer "read one" function.
 *
 * @param {number|string} id
 * @param {Object} [options={}]
 * @param {import("knex").Knex} [options.trx]
 *
 * @returns {Promise<Object|null>}
 */
export async function findEventById(id, { trx } = {}) {
    const row = await baseQuery(trx)
        .where({ id })
        .first();

    return row ?? null;
}

/**
 * OPTIONAL STRUCTURE PLACEHOLDER
 *
 * This function is included to demonstrate that a model file in this project
 * may contain multiple actions for the same entity, not only "list" and "find".
 *
 * It is NOT part of the required trainee scope unless optional/admin features
 * are explicitly implemented.
 *
 * If optional admin functionality is added, this placeholder can be replaced
 * with a real implementation.
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
    const { title, venue, starts_at, description, price, currency, total_tickets } = eventData;

    const createdEvent = await baseQuery(options.trx)
        .insert({
            title,
            venue,
            starts_at,
            description,
            price,
            currency,
            total_tickets
        })
        .returning("*");

    return createdEvent[0];
}

/**
 * OPTIONAL STRUCTURE PLACEHOLDER
 *
 * This function exists only as an example of expected MVC model structure for
 * future entity actions.
 *
 * It is NOT required for the base trainee project unless optional/admin scope
 * is added.
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
 * OPTIONAL STRUCTURE PLACEHOLDER
 *
 * This function exists only to illustrate how additional model actions would
 * be placed in the same MVC model file.
 *
 * It is NOT part of the required trainee implementation in the default scope.
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
