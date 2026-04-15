/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
    await knex.schema.createTable("cart", (t) => {
        t.increments("id").primary();
        t.integer("account_id").notNullable().references("id").inTable("account");
        t.enu("status", ["active", "checked_out", "abandoned"]).notNullable();
        t.timestamps(true, true);
    });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists("cart");
}