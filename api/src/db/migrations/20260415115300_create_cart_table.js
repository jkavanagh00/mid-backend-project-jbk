/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
    await knex.schema.createTable("cart", (t) => {
        t.increments("id").primary();
        t.integer("user_id").notNullable().references("id").inTable("user");
        t.string("status").notNullable();
        t.timestamps(true, true);
    });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists("cart");
}