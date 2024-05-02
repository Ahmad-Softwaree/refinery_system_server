/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

const data = Array.from({ length: 10 }, () => ({
  name: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phone: faker.phone.number(),
  salary: faker.number.int({ max: 100000 }),
  age: faker.number.int({ max: 100000 }),
  gender: "male",
  role: "employee",
  position: "engineer",
  dep_id: 1,
  created_at: new Date(),
  updated_at: new Date(),
}));

// Combine all user data into a single array
const userData = [
  ...data,
  {
    name: "Ahmad",
    email: "dr.ahmad.salah.54@gmail.com",
    password: "ahmadahmad",
    phone: "07701993085",
    salary: 1000000,
    age: 21,
    gender: "male",
    role: "manager",
    position: "engineer",
    dep_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const seed = async function (knex) {
  // Deletes ALL existing entries
  for (let person of userData) {
    person.password = await bcrypt
      .genSalt(16)
      .then(async (pss) => await bcrypt.hash(person.password, pss));
  }
  await knex("user").del();
  await knex("user").insert(userData);
};

export { seed };
