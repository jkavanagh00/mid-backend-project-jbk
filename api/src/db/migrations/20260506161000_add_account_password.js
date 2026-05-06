/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
  await knex.schema.alterTable("account", (t) => {
    t.string("password").notNullable().defaultTo("");
  });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
  await knex.schema.alterTable("account", (t) => {
    t.dropColumn("password");
  });
}
