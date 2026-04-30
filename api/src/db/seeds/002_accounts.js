/**
 * @param {import("knex").Knex} knex
 */
export async function seed(knex) {
  await knex("account").del();

  await knex("account").insert([
    {
      name: "Arthur Dent",
      email: "a_dent@heartofgold.org",
      phone: "+4523654532",
    },
    {
      name: "Ford Prefect",
      email: "f_prefect@betelgeuse.guide",
      phone: "+4523654533",
    },
    {
      name: "Trillian Astra",
      email: "trillian@heartofgold.org",
      phone: null,
    },
    {
      name: "Zaphod Beeblebrox",
      email: "zaphod@galactic.gov",
      phone: "+4523654534",
    },
    {
      name: "Marvin Paranoid",
      email: "marvin@si.example",
      phone: "+4523654535",
    },
    {
      name: "Sam Bell",
      email: "s_bell@lunar.example",
      phone: "+4523654536",
    },
    {
      name: "Ellen Ripley",
      email: "ripley@weyland.example",
      phone: "+4523654537",
    },
    {
      name: "Sarah Connor",
      email: "s_connor@resistance.example",
      phone: "+4523654538",
    },
    {
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+4523654539",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "+4523654540",
    },
    {
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      phone: "+4523654541",
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "+4523654542",
    },
    {
      name: "Jessica Lee",
      email: "jessica.lee@example.com",
      phone: "+4523654543",
    },
    {
      name: "Chris Evans",
      email: "chris.evans@example.com",
      phone: "+4523654544",
    },
    {
      name: "Patricia Kim",
      email: "patricia.kim@example.com",
      phone: "+4523654545",
    },
    {
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "+4523654546",
    },
    {
      name: "Linda Martinez",
      email: "linda.martinez@example.com",
      phone: "+4523654547",
    },
    {
      name: "Robert Garcia",
      email: "robert.garcia@example.com",
      phone: "+4523654548",
    },
    {
      name: "Susan Clark",
      email: "susan.clark@example.com",
      phone: "+4523654549",
    },
    {
      name: "Daniel Lewis",
      email: "daniel.lewis@example.com",
      phone: "+4523654550",
    },
    {
      name: "Karen Walker",
      email: "karen.walker@example.com",
      phone: "+4523654551",
    },
    {
      name: "Matthew Hall",
      email: "matthew.hall@example.com",
      phone: "+4523654552",
    },
    {
      name: "Nancy Allen",
      email: "nancy.allen@example.com",
      phone: "+4523654553",
    },
    {
      name: "Steven Young",
      email: "steven.young@example.com",
      phone: "+4523654554",
    },
    {
      name: "Barbara King",
      email: "barbara.king@example.com",
      phone: "+4523654555",
    },
    {
      name: "Paul Wright",
      email: "paul.wright@example.com",
      phone: "+4523654556",
    },
    {
      name: "Lisa Scott",
      email: "lisa.scott@example.com",
      phone: "+4523654557",
    },
    {
      name: "Mark Green",
      email: "mark.green@example.com",
      phone: "+4523654558",
    },
    {
      name: "Betty Adams",
      email: "betty.adams@example.com",
      phone: "+4523654559",
    },
    {
      name: "James Baker",
      email: "james.baker@example.com",
      phone: "+4523654560",
    },
    {
      name: "Sandra Nelson",
      email: "sandra.nelson@example.com",
      phone: "+4523654561",
    },
    {
      name: "George Carter",
      email: "george.carter@example.com",
      phone: "+4523654562",
    },
  ]);
}
