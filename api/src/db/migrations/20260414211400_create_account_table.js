/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
    await knex.schema.createTable("account", (t) => {
        t.increments("id").primary();
        t.string("name").notNullable();
        t.string("email").notNullable().unique();
        t.string("phone", 20);
        t.timestamps(true, true);
    });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists("account");
}