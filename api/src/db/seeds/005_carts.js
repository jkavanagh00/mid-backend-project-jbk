/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("cart").del();

  await knex("cart")
    .insert([
      {
        id: 1,
        account_id: 1,
        status: "active",
      },
      {
        id: 2,
        account_id: 2,
        status: "active",
      },
      {
        id: 3,
        account_id: 3,
        status: "checked_out",
      },
      {
        id: 4,
        account_id: 4,
        status: "abandoned",
      },
      {
        id: 5,
        account_id: 5,
        status: "active",
      },
      {
        id: 6,
        account_id: 6,
        status: "checked_out",
      },
      {
        id: 7,
        account_id: 7,
        status: "active",
      },
      {
        id: 8,
        account_id: 8,
        status: "abandoned",
      },
    ])
    .onConflict("id")
    .merge();
}
