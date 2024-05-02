import express from "express";
import { body } from "express-validator";
import { managerMiddleware } from "../middleware/auth/manager.js";
import {
  deleteMachine,
  getMachine,
  getMachines,
  updateMachine,
  addMachine,
} from "../api/machine.js";

const machineApp = express.Router();

machineApp.get("/", managerMiddleware, getMachines);
machineApp.get("/:id", managerMiddleware, getMachine);
machineApp.post(
  "/",
  managerMiddleware,
  body("name").notEmpty(),
  body("function").notEmpty(),
  addMachine
);
machineApp.put(
  "/:id",
  managerMiddleware,
  body("name").notEmpty(),
  body("function").notEmpty(),
  updateMachine
);
machineApp.delete("/:id", managerMiddleware, deleteMachine);

export default machineApp;
