/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
    await knex.schema.createTable("booking_item", (t) => {
        t.increments("id").primary();
        t.integer("booking_id").notNullable().references("id").inTable("order");
        t.integer("event_id").notNullable().references("id").inTable("event");
        t.integer("quantity").notNullable().checkPositive();
        t.decimal("unit_price", 10, 2).notNullable();
        t.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists("booking_item");
}