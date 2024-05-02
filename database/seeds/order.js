/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { faker } from "@faker-js/faker";
import db from "../config.js";

const data = Array.from({ length: 100 }, () => ({
  amount_of_barel: faker.number.int({ max: 10000 }),
  price: faker.number.int({ max: 10000 }),
  location: faker.string.alpha(),
  created_at: new Date(),
  updated_at: new Date(),
}));

const seed = async function (knex) {
  let oil = await db("oil").limit(1);
  for (var doc of data) {
    doc.oil_id = oil[0].id;
  }
  await knex("order").del();
  await knex("order").insert(data);
};

export { seed };
