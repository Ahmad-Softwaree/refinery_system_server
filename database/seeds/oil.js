/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { faker } from "@faker-js/faker";

const data = Array.from({ length: 100 }, () => ({
  name: faker.internet.displayName(),
  amount_in_barel: faker.number.int({ max: 100 }),
  price: faker.number.int({ max: 10000 }),
  created_at: new Date(),
  updated_at: new Date(),
}));

const seed = async function (knex) {
  await knex("oil").del();
  await knex("oil").insert(data);
};

export { seed };
