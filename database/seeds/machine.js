/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { faker } from "@faker-js/faker";
import db from "./../config.js";

const data = Array.from({ length: 50 }, () => ({
  name: faker.internet.displayName(),
  function: faker.internet.displayName(),
  created_at: new Date(),
  updated_at: new Date(),
}));

const seed = async function (knex) {
  let user = await db("user").limit(1);
  for (var doc of data) {
    doc.user_id = user[0]?.id;
  }
  await knex("machine").del();
  await knex("machine").insert(data);
};

export { seed };
