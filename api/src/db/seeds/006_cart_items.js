/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("cart_item").del();

  await knex("cart_item")
    .insert([
      {
        id: 1,
        event_id: 2,
        cart_id: 1,
        quantity: 1,
        unit_price: 150,
      },
      {
        id: 2,
        event_id: 4,
        cart_id: 2,
        quantity: 2,
        unit_price: 0,
      },
      {
        id: 3,
        event_id: 1,
        cart_id: 3,
        quantity: 1,
        unit_price: 100,
      },
      {
        id: 4,
        event_id: 5,
        cart_id: 4,
        quantity: 3,
        unit_price: 75,
      },
      {
        id: 5,
        event_id: 8,
        cart_id: 5,
        quantity: 1,
        unit_price: 300,
      },
      {
        id: 6,
        event_id: 3,
        cart_id: 6,
        quantity: 1,
        unit_price: 250,
      },
      {
        id: 7,
        event_id: 7,
        cart_id: 7,
        quantity: 2,
        unit_price: 120,
      },
      {
        id: 8,
        event_id: 6,
        cart_id: 8,
        quantity: 1,
        unit_price: 180,
      },
    ])
    .onConflict("id")
    .merge();
}
