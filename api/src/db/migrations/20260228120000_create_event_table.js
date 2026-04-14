/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
    await knex.schema.createTable("event", (t) => {
        t.increments("id").primary();
        t.string("title").notNullable();
        t.string("venue").notNullable();
        t.datetime("starts_at").notNullable();
        t.text("description");
        t.decimal("price", 10, 2).notNullable();
        t.string("currency", 3).notNullable();
        t.integer("total_tickets").notNullable().checkPositive();
        t.timestamps(true, true);
    });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists("event");
}