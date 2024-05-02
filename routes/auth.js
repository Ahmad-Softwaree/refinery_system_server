import express from "express";
import { getAuth, login, register, updateProfile } from "../api/auth.js";
import { body } from "express-validator";
import {
  checkBody,
  hashPassword,
  passwordValidation,
} from "../middleware/validation/validation.js";
import { managerMiddleware } from "../middleware/auth/manager.js";
import { employeeMiddleware } from "../middleware/auth/employee.js";
const authApp = express.Router();

authApp.get("/auth", employeeMiddleware, getAuth);
authApp.post(
  "/login",
  body("email").notEmpty().isEmail(),
  body("password").notEmpty(),
  checkBody,
  login
);
authApp.post(
  "/register",
  body("name").notEmpty(),
  body("email").notEmpty().isEmail(),
  body("password").notEmpty(),
  body("phone").notEmpty(),
  checkBody,
  passwordValidation,
  hashPassword,
  managerMiddleware,
  register
);

authApp.put(
  "/profile",
  body("name").notEmpty(),
  body("email").notEmpty().isEmail(),
  body("password").notEmpty(),
  body("phone").notEmpty(),
  body("age").notEmpty(),
  body("gender").notEmpty(),
  checkBody,
  passwordValidation,
  hashPassword,
  managerMiddleware,
  updateProfile
);
export default authApp;
