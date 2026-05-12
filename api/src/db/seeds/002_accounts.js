/**
 * @param {import("knex").Knex} knex
 */
import bcrypt from "bcrypt";

export async function seed(knex) {
  await knex("account").del();

  const accounts = [
    {
      name: "Arthur Dent",
      email: "a_dent@heartofgold.org",
      phone: "+4523654532",
      password: "testtest1",
    },
    {
      name: "Ford Prefect",
      email: "f_prefect@betelgeuse.guide",
      phone: "+4523654533",
      password: "testtest2",
    },
    {
      name: "Trillian Astra",
      email: "trillian@heartofgold.org",
      phone: null,
      password: "testtest3",
    },
    {
      name: "Zaphod Beeblebrox",
      email: "zaphod@galactic.gov",
      phone: "+4523654534",
      password: "testtest4",
    },
    {
      name: "Marvin Paranoid",
      email: "marvin@si.example",
      phone: "+4523654535",
      password: "testtest5",
    },
    {
      name: "Sam Bell",
      email: "s_bell@lunar.example",
      phone: "+4523654536",
      password: "testtest6",
    },
    {
      name: "Ellen Ripley",
      email: "ripley@weyland.example",
      phone: "+4523654537",
      password: "testtest7",
    },
    {
      name: "Sarah Connor",
      email: "s_connor@resistance.example",
      phone: "+4523654538",
      password: "testtest8",
    },
    {
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+4523654539",
      password: "testtest9",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "+4523654540",
      password: "testtest10",
    },
    {
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      phone: "+4523654541",
      password: "testtest11",
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "+4523654542",
      password: "testtest12",
    },
    {
      name: "Jessica Lee",
      email: "jessica.lee@example.com",
      phone: "+4523654543",
      password: "testtest13",
    },
    {
      name: "Chris Evans",
      email: "chris.evans@example.com",
      phone: "+4523654544",
      password: "testtest14",
    },
    {
      name: "Patricia Kim",
      email: "patricia.kim@example.com",
      phone: "+4523654545",
      password: "testtest15",
    },
    {
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "+4523654546",
      password: "testtest16",
    },
    {
      name: "Linda Martinez",
      email: "linda.martinez@example.com",
      phone: "+4523654547",
      password: "testtest17",
    },
    {
      name: "Robert Garcia",
      email: "robert.garcia@example.com",
      phone: "+4523654548",
      password: "testtest18",
    },
    {
      name: "Susan Clark",
      email: "susan.clark@example.com",
      phone: "+4523654549",
      password: "testtest19",
    },
    {
      name: "Daniel Lewis",
      email: "daniel.lewis@example.com",
      phone: "+4523654550",
      password: "testtest20",
    },
    {
      name: "Karen Walker",
      email: "karen.walker@example.com",
      phone: "+4523654551",
      password: "testtest21",
    },
    {
      name: "Matthew Hall",
      email: "matthew.hall@example.com",
      phone: "+4523654552",
      password: "testtest22",
    },
    {
      name: "Nancy Allen",
      email: "nancy.allen@example.com",
      phone: "+4523654553",
      password: "testtest23",
    },
    {
      name: "Steven Young",
      email: "steven.young@example.com",
      phone: "+4523654554",
      password: "testtest24",
    },
    {
      name: "Barbara King",
      email: "barbara.king@example.com",
      phone: "+4523654555",
      password: "testtest25",
    },
    {
      name: "Paul Wright",
      email: "paul.wright@example.com",
      phone: "+4523654556",
      password: "testtest26",
    },
    {
      name: "Lisa Scott",
      email: "lisa.scott@example.com",
      phone: "+4523654557",
      password: "testtest27",
    },
    {
      name: "Mark Green",
      email: "mark.green@example.com",
      phone: "+4523654558",
      password: "testtest28",
    },
    {
      name: "Betty Adams",
      email: "betty.adams@example.com",
      phone: "+4523654559",
      password: "testtest29",
    },
    {
      name: "James Baker",
      email: "james.baker@example.com",
      phone: "+4523654560",
      password: "testtest30",
    },
    {
      name: "Sandra Nelson",
      email: "sandra.nelson@example.com",
      phone: "+4523654561",
      password: "testtest31",
    },
    {
      name: "George Carter",
      email: "george.carter@example.com",
      phone: "+4523654562",
      password: "testtest32",
    },
  ];

  const saltRounds = 10;
  for (const account of accounts) {
    account.password = await bcrypt.hash(account.password, saltRounds);
  }

  await knex("account").insert(accounts);
}
