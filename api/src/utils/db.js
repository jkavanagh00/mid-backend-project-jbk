import db from "#configs/database.js";

export async function countTableRows(qb) {
  const row = await qb.count({ count: "*" }).first();
  const count = row?.count ?? row?.["count(*)"] ?? 0;
  return Number(count);
}

export async function applyOptions(qb, options = {}) {
  const { orderBy = "created_at", order = "desc", limit, offset } = options;

  qb.orderBy(orderBy, String(order).toLowerCase() === "desc" ? "desc" : "asc");

  if (Number.isInteger(limit) && limit > 0) {
    qb.limit(limit);
  }

  if (Number.isInteger(offset) && offset >= 0) {
    qb.offset(offset);
  }

  return qb;
}

export async function applyEventFilters(qb, filters = {}) {
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
        .orWhere("venue", "ilike", `%${search}%`)
        .orWhere("description", "ilike", `%${search}%`);
    });
  }

  return qb;
}

export async function applyAccountFilters(qb, filters = {}) {
  const { created_at, updated_at, search } = filters;

  if (created_at) {
    qb.where("created_at", ">=", created_at);
  }

  if (updated_at) {
    qb.where("updated_at", ">=", updated_at);
  }

  if (search) {
    qb.where(function () {
      this.where("name", "ilike", `%${search}%`).orWhere(
        "email",
        "ilike",
        `%${search}%`,
      );
    });
  }

  return qb;
}
