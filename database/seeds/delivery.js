/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { faker } from "@faker-js/faker";

const data = Array.from({ length: 100 }, () => ({
  shipping_type: "car",
  date_of_delivery: new Date(),
  created_at: new Date(),
  updated_at: new Date(),
}));

const seed = async function (knex) {
  await knex("delivery").del();
  await knex("delivery").insert(data);
};

export { seed };
