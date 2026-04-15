/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
    await knex.schema.createTable("order", (t) => {
        t.increments("id").primary();
        t.integer("account_id").notNullable().references("id").inTable("account");
        t.integer("event_id").notNullable().references("id").inTable("event");
        t.enu("status", ["pending", "confirmed", "cancelled"]).notNullable();
        t.timestamps(true, true);
    });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists("order");
}