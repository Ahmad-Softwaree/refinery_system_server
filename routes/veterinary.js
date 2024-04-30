import express from "express";
import { body } from "express-validator";
import { veterinaryMiddleware } from "../middleware/auth/veterinary.js";
import {
  deleteVeterinary,
  getVeterinary,
  getVeterinaries,
  updateVeterinary,
} from "../api/veterinary.js";
import {
  checkBody,
  hashPassword,
  passwordValidation,
} from "../middleware/validation/validation.js";

const veterinaryApp = express.Router();

veterinaryApp.get("/", veterinaryMiddleware, getVeterinaries);
veterinaryApp.get("/:id", veterinaryMiddleware, getVeterinary);

veterinaryApp.put(
  "/:id",
  veterinaryMiddleware,
  body("name").notEmpty(),
  body("email").notEmpty().isEmail(),
  body("password").notEmpty(),
  body("phone").notEmpty(),
  body("age").notEmpty(),
  body("gender").notEmpty(),
  checkBody,
  passwordValidation,
  hashPassword,
  updateVeterinary
);
veterinaryApp.delete("/:id", veterinaryMiddleware, deleteVeterinary);

export default veterinaryApp;
