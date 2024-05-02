/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { faker } from "@faker-js/faker";

const data = Array.from({ length: 10 }, () => ({
  name: faker.internet.displayName(),
  created_at: new Date(),
  updated_at: new Date(),
}));

const seed = async function (knex) {
  await knex("department").del();
  await knex("department").insert(data);
};

export { seed };
