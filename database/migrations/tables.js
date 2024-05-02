const up = function (knex) {
  return knex.schema
    .createTable("config", function (table) {
      table.increments("id").primary();
      table.integer("money");
      table.timestamps();
    })
    .createTable("department", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.timestamps();
    })
    .createTable("user", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.string("email", 255).unique().notNullable();
      table.string("password", 255).notNullable();
      table.string("position", 255).notNullable();
      table.string("phone", 255).notNullable();
      table.integer("salary");
      table.integer("age");
      table.string("gender", 255);
      table.string("role").notNullable().default("employee");
      table.integer("dep_id").unsigned();
      table
        .foreign("dep_id")
        .references("department.id")
        .deferrable("deferred");
      table.timestamps();
    })

    .createTable("machine", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.string("function", 255).notNullable();
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("user.id").deferrable("deferred");
      table.timestamps();
    })
    .createTable("oil", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.integer("amount_in_barel").notNullable();
      table.integer("price").notNullable();
      table.timestamps();
    })
    .createTable("storage", function (table) {
      table.increments("id").primary();
      table.integer("oil_id").unsigned();
      table.foreign("oil_id").references("oil.id").deferrable("deferred");
      table.integer("quantity").notNullable();
      table.string("location", 255).notNullable();
      table.timestamps();
    })
    .createTable("order", function (table) {
      table.increments("id").primary();
      table.integer("oil_id").unsigned();
      table.foreign("oil_id").references("oil.id").deferrable("deferred");
      table.integer("amount_of_barel").notNullable();
      table.integer("price").notNullable();
      table.string("location", 255).notNullable();
      table.timestamps();
    })
    .createTable("delivery", function (table) {
      table.increments("id").primary();
      table.string("shipping_type", 255).notNullable();
      table.timestamp("date_of_delivery", { precision: 6 });
      table.timestamps();
    });
};

const down = function (knex) {};

export { up, down };
