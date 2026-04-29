/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("cart_item").del();

  await knex("cart_item")
    .insert([
      { id: 1, event_id: 2, cart_id: 1, quantity: 1, unit_price: 150 },
      { id: 2, event_id: 4, cart_id: 2, quantity: 2, unit_price: 0 },
      { id: 3, event_id: 1, cart_id: 3, quantity: 1, unit_price: 100 },
      { id: 4, event_id: 5, cart_id: 4, quantity: 3, unit_price: 75 },
      { id: 5, event_id: 8, cart_id: 5, quantity: 1, unit_price: 300 },
      { id: 6, event_id: 3, cart_id: 6, quantity: 1, unit_price: 250 },
      { id: 7, event_id: 7, cart_id: 7, quantity: 2, unit_price: 120 },
      { id: 8, event_id: 6, cart_id: 8, quantity: 1, unit_price: 180 },
      { id: 9, event_id: 2, cart_id: 1, quantity: 2, unit_price: 150 },
      { id: 10, event_id: 3, cart_id: 2, quantity: 1, unit_price: 250 },
      { id: 11, event_id: 4, cart_id: 3, quantity: 2, unit_price: 0 },
      { id: 12, event_id: 5, cart_id: 4, quantity: 1, unit_price: 75 },
      { id: 13, event_id: 6, cart_id: 5, quantity: 3, unit_price: 180 },
      { id: 14, event_id: 7, cart_id: 6, quantity: 2, unit_price: 120 },
      { id: 15, event_id: 8, cart_id: 7, quantity: 1, unit_price: 300 },
      { id: 16, event_id: 1, cart_id: 8, quantity: 2, unit_price: 100 },
      { id: 17, event_id: 2, cart_id: 1, quantity: 1, unit_price: 150 },
      { id: 18, event_id: 3, cart_id: 2, quantity: 2, unit_price: 250 },
      { id: 19, event_id: 4, cart_id: 3, quantity: 1, unit_price: 0 },
      { id: 20, event_id: 5, cart_id: 4, quantity: 3, unit_price: 75 },
      { id: 21, event_id: 6, cart_id: 5, quantity: 2, unit_price: 180 },
      { id: 22, event_id: 7, cart_id: 6, quantity: 1, unit_price: 120 },
      { id: 23, event_id: 8, cart_id: 7, quantity: 2, unit_price: 300 },
      { id: 24, event_id: 1, cart_id: 8, quantity: 1, unit_price: 100 },
      { id: 25, event_id: 2, cart_id: 1, quantity: 3, unit_price: 150 },
      { id: 26, event_id: 3, cart_id: 2, quantity: 2, unit_price: 250 },
      { id: 27, event_id: 4, cart_id: 3, quantity: 1, unit_price: 0 },
      { id: 28, event_id: 5, cart_id: 4, quantity: 2, unit_price: 75 },
      { id: 29, event_id: 6, cart_id: 5, quantity: 1, unit_price: 180 },
      { id: 30, event_id: 7, cart_id: 6, quantity: 3, unit_price: 120 },
      { id: 31, event_id: 8, cart_id: 7, quantity: 2, unit_price: 300 },
      { id: 32, event_id: 1, cart_id: 8, quantity: 1, unit_price: 100 },
    ])
    .onConflict("id")
    .merge();
}
