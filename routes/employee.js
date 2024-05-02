import express from "express";
import { body } from "express-validator";

import {
  deleteEmployee,
  getAllEmployees,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../api/employee.js";
import {
  checkBody,
  hashPassword,
  passwordValidation,
} from "../middleware/validation/validation.js";
import { managerMiddleware } from "../middleware/auth/manager.js";

const employeeApp = express.Router();

employeeApp.get("/", managerMiddleware, getEmployees);
employeeApp.get("/all", managerMiddleware, getAllEmployees);

employeeApp.get("/:id", managerMiddleware, getEmployee);

employeeApp.put(
  "/:id",
  managerMiddleware,
  body("name").notEmpty(),
  body("email").notEmpty().isEmail(),
  body("password").notEmpty(),
  body("phone").notEmpty(),
  body("salary").notEmpty(),
  body("age").notEmpty(),
  body("gender").notEmpty(),
  checkBody,
  passwordValidation,
  hashPassword,
  updateEmployee
);
employeeApp.delete("/:id", managerMiddleware, deleteEmployee);

export default employeeApp;
