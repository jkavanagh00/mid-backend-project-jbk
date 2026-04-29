/**
 * @param {import("knex").Knex} knex
 */
export async function up(knex) {
  await knex.schema.alterTable("cart", (t) => {
    t.integer("account_id").nullable().alter();
    t.string("guest_token", 64);

    t.check(
      "(account_id IS NOT NULL AND guest_token IS NULL) OR (account_id IS NULL AND guest_token IS NOT NULL)",
      [],
      "cart_owner_xor_check",
    );

    t.unique(["account_id"], {
      indexName: "cart_one_active_per_account_idx",
      useConstraint: false,
      predicate: knex.raw("status = 'active' AND account_id IS NOT NULL"),
    });

    t.unique(["guest_token"], {
      indexName: "cart_one_active_per_guest_idx",
      useConstraint: false,
      predicate: knex.raw("status = 'active' AND guest_token IS NOT NULL"),
    });
  });
}

/**
 * @param {import("knex").Knex} knex
 */
export async function down(knex) {
  await knex.schema.alterTable("cart", (t) => {
    t.dropUnique(["guest_token"], "cart_one_active_per_guest_idx");
    t.dropUnique(["account_id"], "cart_one_active_per_account_idx");
    t.dropChecks(["cart_owner_xor_check"]);
  });

  // Remove guest-owned carts before restoring NOT NULL on account_id.
  await knex("cart_item")
    .whereIn("cart_id", knex("cart").select("id").whereNull("account_id"))
    .del();

  await knex("cart").whereNull("account_id").del();

  await knex.schema.alterTable("cart", (t) => {
    t.dropColumn("guest_token");
    t.integer("account_id").notNullable().alter();
  });
}
