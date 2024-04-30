/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { faker } from "@faker-js/faker";

const data = Array.from({ length: 10 }, () => ({
  name: faker.internet.userName(),
  address: faker.internet.displayName(),
  phone: faker.phone.number(),
  created_at: new Date(),
  updated_at: new Date(),
}));

const seed = async function (knex) {
  await knex("customer").del();
  await knex("customer").insert(data);
};

export { seed };
