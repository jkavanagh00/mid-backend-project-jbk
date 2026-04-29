/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("booking_item").del();

  await knex("booking_item")
    .insert([
      {
        id: 1,
        booking_id: 1,
        event_id: 1,
        quantity: 2,
        unit_price: 100,
      },
      {
        id: 2,
        booking_id: 2,
        event_id: 2,
        quantity: 1,
        unit_price: 150,
      },
      {
        id: 3,
        booking_id: 3,
        event_id: 3,
        quantity: 3,
        unit_price: 250,
      },
      {
        id: 4,
        booking_id: 4,
        event_id: 4,
        quantity: 1,
        unit_price: 0,
      },
      {
        id: 5,
        booking_id: 5,
        event_id: 5,
        quantity: 2,
        unit_price: 75,
      },
      {
        id: 6,
        booking_id: 6,
        event_id: 6,
        quantity: 1,
        unit_price: 180,
      },
      {
        id: 7,
        booking_id: 7,
        event_id: 7,
        quantity: 4,
        unit_price: 120,
      },
      {
        id: 8,
        booking_id: 8,
        event_id: 8,
        quantity: 2,
        unit_price: 300,
      },
    ])
    .onConflict("id")
    .merge();
}
