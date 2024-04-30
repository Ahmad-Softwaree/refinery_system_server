const up = function (knex) {
  return knex.schema
    .createTable("config", function (table) {
      table.increments("id").primary();
      table.integer("money");
      table.timestamps();
    })
    .createTable("user", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.string("email", 255).unique().notNullable();
      table.string("password", 255).notNullable();
      table.string("phone", 255).notNullable();
      table.integer("salary");
      table.integer("age");
      table.string("gender", 255);
      table.string("role").notNullable().default("employee");
      table.timestamps();
    })
    .createTable("products", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.string("type", 255).notNullable();
      table.string("image_name", 255);
      table.string("image_url", 255);
      table.integer("discount");
      table.integer("quantity");
      table.integer("price");
      table.timestamp("expire_date", { precision: 6 });
      table.timestamps();
    })
    .createTable("pet", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.string("breed", 255).notNullable();
      table.string("color", 255).notNullable();
      table.string("image_name", 255);
      table.string("image_url", 255);
      table.integer("price");

      table.string("gender", 255);
      table.boolean("checked").default("false");
      table.timestamp("adoption_history", { precision: 6 });
      table.boolean("adopted").default("false");

      table.integer("age");
      table.timestamps();
    })
    .createTable("clinic", function (table) {
      table.increments("id").primary();
      table.integer("pet_id").unsigned();
      table.foreign("pet_id").references("pet.id").deferrable("deferred");
      table.string("disease", 255);
      table.boolean("vaccine").default("false");
      table.string("medicine", 255);
      table.timestamps();
    })
    .createTable("customer", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.string("address", 255).notNullable();
      table.string("phone", 255).notNullable();
      table.timestamps();
    })
    .createTable("pets_purchase", function (table) {
      table.increments("id").primary();
      table.integer("pet_id").unsigned();
      table.foreign("pet_id").references("pet.id").deferrable("deferred");
      table.integer("customer_id").unsigned();
      table
        .foreign("customer_id")
        .references("customer.id")
        .deferrable("deferred");
      table.integer("receipt_number").notNullable();
      table.timestamps();
    })
    .createTable("product_purchases", function (table) {
      table.increments("id").primary();
      table.integer("product_id").unsigned();
      table
        .foreign("product_id")
        .references("products.id")
        .deferrable("deferred");
      table.integer("customer_id").unsigned();
      table
        .foreign("customer_id")
        .references("customer.id")
        .deferrable("deferred");
      table.integer("quantity");

      table.integer("receipt_number").notNullable();
      table.timestamps();
    });
};

const down = function (knex) {};

export { up, down };
