/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("event").del();

  await knex("event")
    .insert([
      {
        id: 1,
        title: "Copenhagen Coffee Crawl",
        venue: "Copenhagen Coffee Society",
        starts_at: "2026-06-23 18:30:00",
        description:
          "A relaxed Saturday walk between 4 specialty cafés. Includes tasting notes, small pastry, and a guide to brewing styles.",
        price: 100,
        currency: "DKK",
        total_tickets: 50
      },
      {
        id: 2,
        title: "After-Work Board Games Night",
        venue: "Norrebro Game Lounge",
        starts_at: "2026-06-25 19:00:00",
        description:
          "Drop in with friends or come solo. We’ll teach quick games, set you up at a table, and keep the vibe cozy and social.",
        price: 150,
        currency: "DKK",
        total_tickets: 40,
      },
      {
        id: 3,
        title: "Beginner Pasta Workshop",
        venue: "Frederiksberg Kitchen Studio",
        starts_at: "2026-06-27 17:30:00",
        description:
          "Hands-on workshop: mix dough, roll sheets, shape pasta, and finish with a simple sauce. You’ll leave with a small take-home pack.",
        price: 250,
        currency: "DKK",
        total_tickets: 24,
      },
      {
        id: 4,
        title: "Sunday Park Run & Stretch",
        venue: "Fælledparken Main Gate",
        starts_at: "2026-06-28 09:00:00",
        description:
          "Easy-paced community run (5K-ish) followed by guided stretching. All levels welcome—walkers included.",
        price: 0,
        currency: "DKK",
        total_tickets: 120,
      },
      {
        id: 5,
        title: "Indie Film Screening: Short Nights",
        venue: "Vesterbro Micro Cinema",
        starts_at: "2026-07-01 20:15:00",
        description:
          "A curated set of local short films with a short Q&A after. Seats are limited—arrive early for the best spots.",
        price: 75,
        currency: "DKK",
        total_tickets: 60,
      },
      {
        id: 6,
        title: "Photography Walk: City Lights",
        venue: "Nyhavn Canal Entrance",
        starts_at: "2026-07-03 21:00:00",
        description:
          "Evening photo walk focused on street scenes and reflections. Bring any camera—even a phone—and we’ll share tips on composition and exposure.",
        price: 180,
        currency: "DKK",
        total_tickets: 30,
      },
      {
        id: 7,
        title: "Bread & Butter Tasting",
        venue: "Amager Bake Lab",
        starts_at: "2026-07-05 11:00:00",
        description:
          "Taste 6 breads and 5 butters (classic + flavored). Learn what makes a good crumb, crust, and fermentation—and why butter matters.",
        price: 120,
        currency: "DKK",
        total_tickets: 36,
      },
      {
        id: 8,
        title: "Live Jazz Trio at the Loft",
        venue: "Christianshavn Loft Stage",
        starts_at: "2026-07-08 19:00:00",
        description:
          "An intimate set with modern standards and originals. Ticket includes a welcome drink; doors open 19:00.",
        price: 300,
        currency: "DKK",
        total_tickets: 80,
      },
    ])
    .onConflict("id")
    .merge();
}
