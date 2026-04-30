/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("cart").del();

  await knex("cart")
    .insert([
      { account_id: 1, status: "active" },
      { account_id: 2, status: "active" },
      { account_id: 3, status: "checked_out" },
      { account_id: 4, status: "abandoned" },
      { account_id: 5, status: "active" },
      { account_id: 6, status: "checked_out" },
      { account_id: 7, status: "active" },
      { account_id: 8, status: "abandoned" },
      { account_id: 9, status: "active" },
      { account_id: 10, status: "checked_out" },
      { account_id: 11, status: "abandoned" },
      { account_id: 12, status: "active" },
      { account_id: 13, status: "checked_out" },
      { account_id: 14, status: "abandoned" },
      { account_id: 15, status: "active" },
      { account_id: 16, status: "checked_out" },
      { account_id: 17, status: "abandoned" },
      { account_id: 18, status: "active" },
      { account_id: 19, status: "checked_out" },
      { account_id: 20, status: "abandoned" },
      { account_id: 21, status: "active" },
      { account_id: 22, status: "checked_out" },
      { account_id: 23, status: "abandoned" },
      { account_id: 24, status: "active" },
      { account_id: 25, status: "checked_out" },
      { account_id: 26, status: "abandoned" },
      { account_id: 27, status: "active" },
      { account_id: 28, status: "checked_out" },
      { account_id: 29, status: "abandoned" },
      { account_id: 30, status: "active" },
      { account_id: 31, status: "checked_out" },
      { account_id: 32, status: "abandoned" },
    ]);
}
