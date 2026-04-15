/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
    await knex.schema.createTable("booking", (t) => {
        t.increments("id").primary();
        t.integer("user_id").notNullable().references("id").inTable("user");
        t.integer("event_id").notNullable().references("id").inTable("event");
        t.string("status").notNullable();
        t.timestamps(true, true);
    });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists("booking");
}