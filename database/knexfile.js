const development = {
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "aghlqtyo2018#",
    database: "refinery_system",
  },
  seeds: {
    path: "/seeds",
  },
};

const production = {
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "aghlqtyo2018#",
    database: "refinery_system",
  },
  seeds: {
    path: "/seeds",
  },
};

export { development, production };
