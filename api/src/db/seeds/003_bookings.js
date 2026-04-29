/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("booking").del();

  await knex("booking")
    .insert([
      {
        id: 1,
        account_id: 3,
        event_id: 1,
        status: "pending"
      },
      {
        id: 2,
        account_id: 1,
        event_id: 2,
        status: "confirmed"
      },
      {
        id: 3,
        account_id: 2,
        event_id: 3,
        status: "cancelled"
      },
      {
        id: 4,
        account_id: 4,
        event_id: 4,
        status: "pending"
      },
      {
        id: 5,
        account_id: 5,
        event_id: 5,
        status: "confirmed"
      },
      {
        id: 6,
        account_id: 6,
        event_id: 6,
        status: "cancelled"
      },
      {
        id: 7,
        account_id: 7,
        event_id: 7,
        status: "pending"
      },
      {
        id: 8,
        account_id: 8,
        event_id: 8,
        status: "confirmed"
      },
    ])
    .onConflict("id")
    .merge();
}
