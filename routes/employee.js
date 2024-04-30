import express from "express";
import { body } from "express-validator";
import { employeeMiddleware } from "./../middleware/auth/employee.js";
import {
  deleteEmployee,
  getEmployee,
  getEmployees,
  makeManager,
  updateEmployee,
} from "../api/employee.js";
import {
  checkBody,
  hashPassword,
  passwordValidation,
} from "../middleware/validation/validation.js";
import { managerMiddleware } from "../middleware/auth/manager.js";

const employeeApp = express.Router();

employeeApp.get("/", employeeMiddleware, getEmployees);
employeeApp.get("/:id", employeeMiddleware, getEmployee);
employeeApp.put("/manager/:id", managerMiddleware, makeManager);

employeeApp.put(
  "/:id",
  employeeMiddleware,
  body("name").notEmpty(),
  body("email").notEmpty().isEmail(),
  body("password").notEmpty(),
  body("phone").notEmpty(),
  body("age").notEmpty(),
  body("gender").notEmpty(),
  checkBody,
  passwordValidation,
  hashPassword,
  updateEmployee
);
employeeApp.delete("/:id", employeeMiddleware, deleteEmployee);

export default employeeApp;
