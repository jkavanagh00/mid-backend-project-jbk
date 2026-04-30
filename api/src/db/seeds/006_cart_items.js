/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("cart_item").del();

  await knex("cart_item")
    .insert([
      { event_id: 2, cart_id: 1, quantity: 1, unit_price: 150 },
      { event_id: 4, cart_id: 2, quantity: 2, unit_price: 0 },
      { event_id: 1, cart_id: 3, quantity: 1, unit_price: 100 },
      { event_id: 5, cart_id: 4, quantity: 3, unit_price: 75 },
      { event_id: 8, cart_id: 5, quantity: 1, unit_price: 300 },
      { event_id: 3, cart_id: 6, quantity: 1, unit_price: 250 },
      { event_id: 7, cart_id: 7, quantity: 2, unit_price: 120 },
      { event_id: 6, cart_id: 8, quantity: 1, unit_price: 180 },
      { event_id: 2, cart_id: 1, quantity: 2, unit_price: 150 },
      { event_id: 3, cart_id: 2, quantity: 1, unit_price: 250 },
      { event_id: 4, cart_id: 3, quantity: 2, unit_price: 0 },
      { event_id: 5, cart_id: 4, quantity: 1, unit_price: 75 },
      { event_id: 6, cart_id: 5, quantity: 3, unit_price: 180 },
      { event_id: 7, cart_id: 6, quantity: 2, unit_price: 120 },
      { event_id: 8, cart_id: 7, quantity: 1, unit_price: 300 },
      { event_id: 1, cart_id: 8, quantity: 2, unit_price: 100 },
      { event_id: 2, cart_id: 1, quantity: 1, unit_price: 150 },
      { event_id: 3, cart_id: 2, quantity: 2, unit_price: 250 },
      { event_id: 4, cart_id: 3, quantity: 1, unit_price: 0 },
      { event_id: 5, cart_id: 4, quantity: 3, unit_price: 75 },
      { event_id: 6, cart_id: 5, quantity: 2, unit_price: 180 },
      { event_id: 7, cart_id: 6, quantity: 1, unit_price: 120 },
      { event_id: 8, cart_id: 7, quantity: 2, unit_price: 300 },
      { event_id: 1, cart_id: 8, quantity: 1, unit_price: 100 },
      { event_id: 2, cart_id: 1, quantity: 3, unit_price: 150 },
      { event_id: 3, cart_id: 2, quantity: 2, unit_price: 250 },
      { event_id: 4, cart_id: 3, quantity: 1, unit_price: 0 },
      { event_id: 5, cart_id: 4, quantity: 2, unit_price: 75 },
      { event_id: 6, cart_id: 5, quantity: 1, unit_price: 180 },
      { event_id: 7, cart_id: 6, quantity: 3, unit_price: 120 },
      { event_id: 8, cart_id: 7, quantity: 2, unit_price: 300 },
      { event_id: 1, cart_id: 8, quantity: 1, unit_price: 100 },
    ]);
}
