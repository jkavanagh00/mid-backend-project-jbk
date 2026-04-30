/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("booking_item").del();

  await knex("booking_item")
    .insert([
      { booking_id: 1, event_id: 1, quantity: 2, unit_price: 100 },
      { booking_id: 2, event_id: 2, quantity: 1, unit_price: 150 },
      { booking_id: 3, event_id: 3, quantity: 3, unit_price: 250 },
      { booking_id: 4, event_id: 4, quantity: 1, unit_price: 0 },
      { booking_id: 5, event_id: 5, quantity: 2, unit_price: 75 },
      { booking_id: 6, event_id: 6, quantity: 1, unit_price: 180 },
      { booking_id: 7, event_id: 7, quantity: 4, unit_price: 120 },
      { booking_id: 8, event_id: 8, quantity: 2, unit_price: 300 },
      { booking_id: 9, event_id: 9, quantity: 2, unit_price: 200 },
      { booking_id: 10, event_id: 10, quantity: 1, unit_price: 350 },
      { booking_id: 11, event_id: 11, quantity: 3, unit_price: 250 },
      { booking_id: 12, event_id: 12, quantity: 1, unit_price: 500 },
      { booking_id: 13, event_id: 13, quantity: 2, unit_price: 180 },
      { booking_id: 14, event_id: 14, quantity: 1, unit_price: 60 },
      { booking_id: 15, event_id: 15, quantity: 4, unit_price: 0 },
      { booking_id: 16, event_id: 16, quantity: 2, unit_price: 120 },
      { booking_id: 17, event_id: 17, quantity: 1, unit_price: 160 },
      { booking_id: 18, event_id: 18, quantity: 3, unit_price: 90 },
      { booking_id: 19, event_id: 19, quantity: 2, unit_price: 220 },
      { booking_id: 20, event_id: 20, quantity: 1, unit_price: 80 },
      { booking_id: 21, event_id: 21, quantity: 2, unit_price: 130 },
      { booking_id: 22, event_id: 22, quantity: 1, unit_price: 60 },
      { booking_id: 23, event_id: 23, quantity: 3, unit_price: 210 },
      { booking_id: 24, event_id: 24, quantity: 2, unit_price: 70 },
      { booking_id: 25, event_id: 25, quantity: 1, unit_price: 0 },
      { booking_id: 26, event_id: 26, quantity: 2, unit_price: 180 },
      { booking_id: 27, event_id: 27, quantity: 1, unit_price: 50 },
      { booking_id: 28, event_id: 28, quantity: 4, unit_price: 180 },
      { booking_id: 29, event_id: 29, quantity: 2, unit_price: 160 },
      { booking_id: 30, event_id: 30, quantity: 1, unit_price: 100 },
      { booking_id: 31, event_id: 31, quantity: 3, unit_price: 70 },
      { booking_id: 32, event_id: 32, quantity: 2, unit_price: 110 },
    ]);
}
