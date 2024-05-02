import express from "express";
import { body } from "express-validator";
import { managerMiddleware } from "../middleware/auth/manager.js";
import {
  addDepartment,
  deleteDepartment,
  getAllDepartments,
  getDepartment,
  getDepartments,
  updateDepartment,
} from "../api/department.js";
import {
  checkBody,
  hashPassword,
  passwordValidation,
} from "../middleware/validation/validation.js";

const departmentApp = express.Router();

departmentApp.get("/", managerMiddleware, getDepartments);
departmentApp.get("/all", managerMiddleware, getAllDepartments);

departmentApp.get("/:id", managerMiddleware, getDepartment);

departmentApp.post(
  "/",
  managerMiddleware,
  body("name").notEmpty(),
  checkBody,
  addDepartment
);

departmentApp.put(
  "/:id",
  managerMiddleware,
  body("name").notEmpty(),
  checkBody,
  updateDepartment
);
departmentApp.delete("/:id", managerMiddleware, deleteDepartment);

export default departmentApp;
