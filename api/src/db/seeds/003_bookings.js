/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("booking").del();

  await knex("booking").insert([
    { id: 1, account_id: 3, status: "pending" },
    { id: 2, account_id: 1, status: "confirmed" },
    { id: 3, account_id: 2, status: "cancelled" },
    { id: 4, account_id: 4, status: "pending" },
    { id: 5, account_id: 5, status: "confirmed" },
    { id: 6, account_id: 6, status: "cancelled" },
    { id: 7, account_id: 7, status: "pending" },
    { id: 8, account_id: 8, status: "confirmed" },
    { id: 9, account_id: 9, status: "pending" },
    { id: 10, account_id: 10,  status: "confirmed" },
    { id: 11, account_id: 11,  status: "cancelled" },
    { id: 12, account_id: 12,  status: "pending" },
    { id: 13, account_id: 13,  status: "confirmed" },
    { id: 14, account_id: 14,  status: "cancelled" },
    { id: 15, account_id: 15,  status: "pending" },
    { id: 16, account_id: 16,  status: "confirmed" },
    { id: 17, account_id: 17,  status: "cancelled" },
    { id: 18, account_id: 18,  status: "pending" },
    { id: 19, account_id: 19,  status: "confirmed" },
    { id: 20, account_id: 20,  status: "cancelled" },
    { id: 21, account_id: 21,  status: "pending" },
    { id: 22, account_id: 22,  status: "confirmed" },
    { id: 23, account_id: 23,  status: "cancelled" },
    { id: 24, account_id: 24,  status: "pending" },
    { id: 25, account_id: 25,  status: "confirmed" },
    { id: 26, account_id: 26,  status: "cancelled" },
    { id: 27, account_id: 27,  status: "pending" },
    { id: 28, account_id: 28,  status: "confirmed" },
    { id: 29, account_id: 29,  status: "cancelled" },
    { id: 30, account_id: 30,  status: "pending" },
    { id: 31, account_id: 31,  status: "confirmed" },
    { id: 32, account_id: 32,  status: "cancelled" },
  ]);
}
