/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("order_item").del();

  await knex("order_item")
    .insert([
      {
        id: 1,
        order_id: 1,
        event_id: 1,
        quantity: 2,
        unit_price: 100,
      },
      {
        id: 2,
        order_id: 2,
        event_id: 2,
        quantity: 1,
        unit_price: 150,
      },
      {
        id: 3,
        order_id: 3,
        event_id: 3,
        quantity: 3,
        unit_price: 250,
      },
      {
        id: 4,
        order_id: 4,
        event_id: 4,
        quantity: 1,
        unit_price: 0,
      },
      {
        id: 5,
        order_id: 5,
        event_id: 5,
        quantity: 2,
        unit_price: 75,
      },
      {
        id: 6,
        order_id: 6,
        event_id: 6,
        quantity: 1,
        unit_price: 180,
      },
      {
        id: 7,
        order_id: 7,
        event_id: 7,
        quantity: 4,
        unit_price: 120,
      },
      {
        id: 8,
        order_id: 8,
        event_id: 8,
        quantity: 2,
        unit_price: 300,
      },
    ])
    .onConflict("id")
    .merge();
}
