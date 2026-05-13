/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("booking").del();

  await knex("booking").insert([
    { account_id: 3, status: "pending" },
    { account_id: 1, status: "confirmed" },
    { account_id: 2, status: "cancelled" },
    { account_id: 4, status: "pending" },
    { account_id: 5, status: "confirmed" },
    { account_id: 6, status: "cancelled" },
    { account_id: 7, status: "pending" },
    { account_id: 8, status: "confirmed" },
    { account_id: 9, status: "pending" },
    { account_id: 10,  status: "confirmed" },
    { account_id: 11,  status: "cancelled" },
    { account_id: 12,  status: "pending" },
    { account_id: 13,  status: "confirmed" },
    { account_id: 14,  status: "cancelled" },
    { account_id: 15,  status: "pending" },
    { account_id: 16,  status: "confirmed" },
    { account_id: 17,  status: "cancelled" },
    { account_id: 18,  status: "pending" },
    { account_id: 19,  status: "confirmed" },
    { account_id: 20,  status: "cancelled" },
    { account_id: 21,  status: "pending" },
    { account_id: 22,  status: "confirmed" },
    { account_id: 23,  status: "cancelled" },
    { account_id: 24,  status: "pending" },
    { account_id: 25,  status: "confirmed" },
    { account_id: 26,  status: "cancelled" },
    { account_id: 27,  status: "pending" },
    { account_id: 28,  status: "confirmed" },
    { account_id: 29,  status: "cancelled" },
    { account_id: 30,  status: "pending" },
    { account_id: 31,  status: "confirmed" },
    { account_id: 32,  status: "cancelled" },
  ]);
}
