import express from "express";
import { body } from "express-validator";
import { employeeMiddleware } from "../middleware/auth/employee.js";
import {
  addCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
} from "../api/customer.js";
import { checkBody } from "../middleware/validation/validation.js";

const customerApp = express.Router();

customerApp.get("/", employeeMiddleware, getCustomers);
customerApp.get("/:id", employeeMiddleware, getCustomer);
customerApp.post(
  "/",
  employeeMiddleware,
  body("name").notEmpty(),
  body("address").notEmpty(),
  body("phone").notEmpty(),
  checkBody,
  addCustomer
);
customerApp.put(
  "/:id",
  employeeMiddleware,
  body("name").notEmpty(),
  body("address").notEmpty(),
  body("phone").notEmpty(),
  checkBody,
  updateCustomer
);
customerApp.delete("/:id", employeeMiddleware, deleteCustomer);

export default customerApp;
