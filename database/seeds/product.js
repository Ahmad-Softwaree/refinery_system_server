/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import { faker } from "@faker-js/faker";

const foodProducts = Array.from({ length: 10 }, () => ({
  name: faker.internet.displayName(),
  type: "food",
  price: faker.number.int({ max: 10000 }),
  quantity: faker.number.int({ max: 100000 }),
  discount: faker.number.int({ max: 50 }),
  expire_date: faker.date.anytime(),
  created_at: new Date(),
  updated_at: new Date(),
}));

const toyProducts = Array.from({ length: 10 }, () => ({
  name: faker.internet.displayName(),
  type: "toy",
  price: faker.number.int({ max: 10000 }),
  quantity: faker.number.int({ max: 100000 }),
  discount: faker.number.int({ max: 50 }),
  expire_date: faker.date.anytime(),
  created_at: new Date(),
  updated_at: new Date(),
}));

const groomingProducts = Array.from({ length: 10 }, () => ({
  name: faker.internet.displayName(),
  type: "grooming",
  price: faker.number.int({ max: 10000 }),
  quantity: faker.number.int({ max: 100000 }),
  discount: faker.number.int({ max: 50 }),
  expire_date: faker.date.anytime(),
  created_at: new Date(),
  updated_at: new Date(),
}));

const beddingProduct = Array.from({ length: 10 }, () => ({
  name: faker.internet.displayName(),
  type: "beddingAndHousing",
  price: faker.number.int({ max: 10000 }),
  quantity: faker.number.int({ max: 100000 }),
  discount: faker.number.int({ max: 50 }),
  expire_date: faker.date.anytime(),
  created_at: new Date(),
  updated_at: new Date(),
}));

const data = [
  ...foodProducts,
  ...toyProducts,
  ...groomingProducts,
  ...beddingProduct,
];

const seed = async function (knex) {
  await knex("products").del();
  await knex("products").insert(data);
};

export { seed };
