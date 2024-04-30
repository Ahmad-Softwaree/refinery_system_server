import { development, production } from "./knexfile.js";
import knex from "knex";
import dotenv from "dotenv";
dotenv.config();
const db = knex(
  process.env.STAGE == "production" ? production : development
  // process.env.STAGE == "development"
  //   ? knexFile.development
  //   : knexFile.production
);

export default db;
