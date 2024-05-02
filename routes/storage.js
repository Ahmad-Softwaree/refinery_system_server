import express from "express";
import { body } from "express-validator";
import { employeeMiddleware } from "../middleware/auth/employee.js";
import {
  deleteStorage,
  getStorage,
  getStorages,
  updateStorage,
  addStorage,
} from "../api/storage.js";

const storageApp = express.Router();

storageApp.get("/", employeeMiddleware, getStorages);
storageApp.get("/:id", employeeMiddleware, getStorage);
storageApp.post(
  "/",
  employeeMiddleware,
  body("quantity").notEmpty(),
  body("location").notEmpty(),
  body("oil_id").notEmpty(),
  addStorage
);
storageApp.put(
  "/:id",
  employeeMiddleware,
  body("quantity").notEmpty(),
  body("location").notEmpty(),
  body("oil_id").notEmpty(),
  updateStorage
);
storageApp.delete("/:id", employeeMiddleware, deleteStorage);

export default storageApp;
