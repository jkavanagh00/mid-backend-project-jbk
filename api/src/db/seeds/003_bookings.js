/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("booking").del();

  await knex("booking").insert([
    { account_id: 3, event_id: 1, status: "pending" },
    { account_id: 1, event_id: 2, status: "confirmed" },
    { account_id: 2, event_id: 3, status: "cancelled" },
    { account_id: 4, event_id: 4, status: "pending" },
    { account_id: 5, event_id: 5, status: "confirmed" },
    { account_id: 6, event_id: 6, status: "cancelled" },
    { account_id: 7, event_id: 7, status: "pending" },
    { account_id: 8, event_id: 8, status: "confirmed" },
    { account_id: 9, event_id: 9, status: "pending" },
    { account_id: 10, event_id: 10, status: "confirmed" },
    { account_id: 11, event_id: 11, status: "cancelled" },
    { account_id: 12, event_id: 12, status: "pending" },
    { account_id: 13, event_id: 13, status: "confirmed" },
    { account_id: 14, event_id: 14, status: "cancelled" },
    { account_id: 15, event_id: 15, status: "pending" },
    { account_id: 16, event_id: 16, status: "confirmed" },
    { account_id: 17, event_id: 17, status: "cancelled" },
    { account_id: 18, event_id: 18, status: "pending" },
    { account_id: 19, event_id: 19, status: "confirmed" },
    { account_id: 20, event_id: 20, status: "cancelled" },
    { account_id: 21, event_id: 21, status: "pending" },
    { account_id: 22, event_id: 22, status: "confirmed" },
    { account_id: 23, event_id: 23, status: "cancelled" },
    { account_id: 24, event_id: 24, status: "pending" },
    { account_id: 25, event_id: 25, status: "confirmed" },
    { account_id: 26, event_id: 26, status: "cancelled" },
    { account_id: 27, event_id: 27, status: "pending" },
    { account_id: 28, event_id: 28, status: "confirmed" },
    { account_id: 29, event_id: 29, status: "cancelled" },
    { account_id: 30, event_id: 30, status: "pending" },
    { account_id: 31, event_id: 31, status: "confirmed" },
    { account_id: 32, event_id: 32, status: "cancelled" },
  ]);
}
