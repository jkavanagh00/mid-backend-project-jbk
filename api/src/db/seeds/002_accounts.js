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
      password: "test"
    },
    {
      name: "Ford Prefect",
      email: "f_prefect@betelgeuse.guide",
      phone: "+4523654533",
      password: "test"
    },
    {
      name: "Trillian Astra",
      email: "trillian@heartofgold.org",
      phone: null,
      password: "test"
    },
    {
      name: "Zaphod Beeblebrox",
      email: "zaphod@galactic.gov",
      phone: "+4523654534",
      password: "test"
    },
    {
      name: "Marvin Paranoid",
      email: "marvin@si.example",
      phone: "+4523654535",
      password: "test"
    },
    {
      name: "Sam Bell",
      email: "s_bell@lunar.example",
      phone: "+4523654536",
      password: "test"
    },
    {
      name: "Ellen Ripley",
      email: "ripley@weyland.example",
      phone: "+4523654537",
      password: "test"
    },
    {
      name: "Sarah Connor",
      email: "s_connor@resistance.example",
      phone: "+4523654538",
      password: "test"
    },
    {
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+4523654539",
      password: "test"
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "+4523654540",
      password: "test"
    },
    {
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      phone: "+4523654541",
      password: "test"
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "+4523654542",
      password: "test"
    },
    {
      name: "Jessica Lee",
      email: "jessica.lee@example.com",
      phone: "+4523654543",
      password: "test"
    },
    {
      name: "Chris Evans",
      email: "chris.evans@example.com",
      phone: "+4523654544",
      password: "test"
    },
    {
      name: "Patricia Kim",
      email: "patricia.kim@example.com",
      phone: "+4523654545",
      password: "test"
    },
    {
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "+4523654546",
      password: "test"
    },
    {
      name: "Linda Martinez",
      email: "linda.martinez@example.com",
      phone: "+4523654547",
      password: "test"
    },
    {
      name: "Robert Garcia",
      email: "robert.garcia@example.com",
      phone: "+4523654548",
      password: "test"
    },
    {
      name: "Susan Clark",
      email: "susan.clark@example.com",
      phone: "+4523654549",
      password: "test"
    },
    {
      name: "Daniel Lewis",
      email: "daniel.lewis@example.com",
      phone: "+4523654550",
      password: "test"
    },
    {
      name: "Karen Walker",
      email: "karen.walker@example.com",
      phone: "+4523654551",
      password: "test"
    },
    {
      name: "Matthew Hall",
      email: "matthew.hall@example.com",
      phone: "+4523654552",
      password: "test"
    },
    {
      name: "Nancy Allen",
      email: "nancy.allen@example.com",
      phone: "+4523654553",
      password: "test"
    },
    {
      name: "Steven Young",
      email: "steven.young@example.com",
      phone: "+4523654554",
      password: "test"
    },
    {
      name: "Barbara King",
      email: "barbara.king@example.com",
      phone: "+4523654555",
      password: "test"
    },
    {
      name: "Paul Wright",
      email: "paul.wright@example.com",
      phone: "+4523654556",
      password: "test"
    },
    {
      name: "Lisa Scott",
      email: "lisa.scott@example.com",
      phone: "+4523654557",
      password: "test"
    },
    {
      name: "Mark Green",
      email: "mark.green@example.com",
      phone: "+4523654558",
      password: "test"
    },
    {
      name: "Betty Adams",
      email: "betty.adams@example.com",
      phone: "+4523654559",
      password: "test"
    },
    {
      name: "James Baker",
      email: "james.baker@example.com",
      phone: "+4523654560",
      password: "test"
    },
    {
      name: "Sandra Nelson",
      email: "sandra.nelson@example.com",
      phone: "+4523654561",
      password: "test"
    },
    {
      name: "George Carter",
      email: "george.carter@example.com",
      phone: "+4523654562",
      password: "test"
    },
  ]);
}
