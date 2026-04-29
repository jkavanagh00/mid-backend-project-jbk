/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("cart").del();

  await knex("cart")
    .insert([
      { id: 1, account_id: 1, status: "active" },
      { id: 2, account_id: 2, status: "active" },
      { id: 3, account_id: 3, status: "checked_out" },
      { id: 4, account_id: 4, status: "abandoned" },
      { id: 5, account_id: 5, status: "active" },
      { id: 6, account_id: 6, status: "checked_out" },
      { id: 7, account_id: 7, status: "active" },
      { id: 8, account_id: 8, status: "abandoned" },
      { id: 9, account_id: 9, status: "active" },
      { id: 10, account_id: 10, status: "checked_out" },
      { id: 11, account_id: 11, status: "abandoned" },
      { id: 12, account_id: 12, status: "active" },
      { id: 13, account_id: 13, status: "checked_out" },
      { id: 14, account_id: 14, status: "abandoned" },
      { id: 15, account_id: 15, status: "active" },
      { id: 16, account_id: 16, status: "checked_out" },
      { id: 17, account_id: 17, status: "abandoned" },
      { id: 18, account_id: 18, status: "active" },
      { id: 19, account_id: 19, status: "checked_out" },
      { id: 20, account_id: 20, status: "abandoned" },
      { id: 21, account_id: 21, status: "active" },
      { id: 22, account_id: 22, status: "checked_out" },
      { id: 23, account_id: 23, status: "abandoned" },
      { id: 24, account_id: 24, status: "active" },
      { id: 25, account_id: 25, status: "checked_out" },
      { id: 26, account_id: 26, status: "abandoned" },
      { id: 27, account_id: 27, status: "active" },
      { id: 28, account_id: 28, status: "checked_out" },
      { id: 29, account_id: 29, status: "abandoned" },
      { id: 30, account_id: 30, status: "active" },
      { id: 31, account_id: 31, status: "checked_out" },
      { id: 32, account_id: 32, status: "abandoned" },
    ])
    .onConflict("id")
    .merge();
}
