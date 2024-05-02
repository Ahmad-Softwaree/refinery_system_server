import express from "express";
import { body } from "express-validator";
import { employeeMiddleware } from "../middleware/auth/employee.js";
import {
  deleteOil,
  getOil,
  getOils,
  updateOil,
  addOil,
  getAllOils,
} from "../api/oil.js";

const oilApp = express.Router();

oilApp.get("/", employeeMiddleware, getOils);
oilApp.get("/all", employeeMiddleware, getAllOils);

oilApp.get("/:id", employeeMiddleware, getOil);
oilApp.post(
  "/",
  employeeMiddleware,
  body("name").notEmpty(),
  body("amount_in_barel").notEmpty(),
  body("price").notEmpty(),

  addOil
);
oilApp.put(
  "/:id",
  employeeMiddleware,
  body("name").notEmpty(),
  body("amount_in_barel").notEmpty(),
  body("price").notEmpty(),

  updateOil
);
oilApp.delete("/:id", employeeMiddleware, deleteOil);

export default oilApp;
