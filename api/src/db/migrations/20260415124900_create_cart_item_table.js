/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
    await knex.schema.createTable("cart_item", (t) => {
        t.increments("id").primary();
        t.integer("event_id").notNullable().references("id").inTable("event");
        t.integer("cart_id").notNullable().references("id").inTable("cart");
        t.interger("quantity").notNullable();
        t.decimel("unit_price", 10, 2).notNullable();
        t.timestamps(true, true);
    });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists("cart_item");
}