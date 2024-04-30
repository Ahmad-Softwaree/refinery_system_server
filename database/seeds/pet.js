/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { faker } from "@faker-js/faker";

const pets = Array.from({ length: 30 }, () => ({
  name: faker.internet.displayName(),
  breed: faker.internet.displayName(),
  color: faker.internet.color(),
  price: faker.number.int({ max: 10000 }),
  age: faker.number.int({ max: 100000 }),
  gender: "male",
  created_at: new Date(),
  updated_at: new Date(),
}));

const seed = async function (knex) {
  await knex("pet").del();
  await knex("pet").insert(pets);
};

export { seed };
