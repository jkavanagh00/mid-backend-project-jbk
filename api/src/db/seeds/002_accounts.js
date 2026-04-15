/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("account").del();

  await knex("account")
    .insert([
      {
        id: 1,
        name: "Arthur Dent",
        email: "a_dent@heartofgold.org",
        phone: "+4523654532",
      },
      {
        id: 2,
        name: "Ford Prefect",
        email: "f_prefect@betelgeuse.guide",
        phone: "+4523654533",
      },
      {
        id: 3,
        name: "Trillian Astra",
        email: "trillian@heartofgold.org",
        phone: null,
      },
      {
        id: 4,
        name: "Zaphod Beeblebrox",
        email: "zaphod@galactic.gov",
        phone: "+4523654534",
      },
      {
        id: 5,
        name: "Marvin Paranoid",
        email: "marvin@si.example",
        phone: "+4523654535",
      },
      {
        id: 6,
        name: "Sam Bell",
        email: "s_bell@lunar.example",
        phone: "+4523654536",
      },
      {
        id: 7,
        name: "Ellen Ripley",
        email: "ripley@weyland.example",
        phone: "+4523654537",
      },
      {
        id: 8,
        name: "Sarah Connor",
        email: "s_connor@resistance.example",
        phone: "+4523654538",
      },
    ])
    .onConflict("id")
    .merge();
}
