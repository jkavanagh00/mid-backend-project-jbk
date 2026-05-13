/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
  await knex.schema.alterTable("booking", (t) => {
    t.dropColumn("event_id");
  });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
  await knex.schema.alterTable("booking", (t) => {
    t.integer("event_id").notNullable().references("id").inTable("event");
  });
}
