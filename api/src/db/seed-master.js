/**
 * Master seed file to clear and reseed all tables in correct dependency order.
 * Run this file to avoid foreign key constraint errors.
 *
 * Usage: node src/db/seed-master.js
 */
import "dotenv/config";
import knex from "#configs/database.js";

(async () => {
  try {

    // Delete in dependency order (most dependent first)
    await knex("cart_item").del();
    await knex("booking_item").del();
    await knex("cart").del();
    await knex("booking").del();
    await knex("event").del();
    await knex("account").del();

    // Reset sequences for tables with auto-incrementing primary keys
    // (PostgreSQL syntax)
    await knex.raw("ALTER SEQUENCE account_id_seq RESTART WITH 1");
    await knex.raw("ALTER SEQUENCE event_id_seq RESTART WITH 1");
    await knex.raw("ALTER SEQUENCE booking_id_seq RESTART WITH 1");
    await knex.raw("ALTER SEQUENCE cart_id_seq RESTART WITH 1");
    await knex.raw("ALTER SEQUENCE booking_item_id_seq RESTART WITH 1");
    await knex.raw("ALTER SEQUENCE cart_item_id_seq RESTART WITH 1");

    // Run all individual seed files (order: account, event, booking, booking_item, cart, cart_item)
    await import("./seeds/002_accounts.js").then(m => m.seed(knex));
    await import("./seeds/001_events.js").then(m => m.seed(knex));
    await import("./seeds/003_bookings.js").then(m => m.seed(knex));
    await import("./seeds/004_booking_items.js").then(m => m.seed(knex));
    await import("./seeds/005_carts.js").then(m => m.seed(knex));
    await import("./seeds/006_cart_items.js").then(m => m.seed(knex));

    console.log("[db] ✅ master seed completed");
    await knex.destroy();
    process.exit(0);
  } catch (err) {
    console.error("[db] ❌ master seed failed:", err);
    try { await knex.destroy(); } catch {}
    process.exit(1);
  }
})();
