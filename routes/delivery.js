import express from "express";
import { body } from "express-validator";
import { employeeMiddleware } from "../middleware/auth/employee.js";
import {
  deleteDelivery,
  getDelivery,
  getDeliveries,
  updateDelivery,
  addDelivery,
} from "../api/delivery.js";

const deliveryApp = express.Router();

deliveryApp.get("/", employeeMiddleware, getDeliveries);
deliveryApp.get("/:id", employeeMiddleware, getDelivery);
deliveryApp.post(
  "/",
  employeeMiddleware,
  body("shipping_type").notEmpty(),
  body("date_of_delivery").notEmpty(),

  addDelivery
);
deliveryApp.put(
  "/:id",
  employeeMiddleware,
  body("shipping_type").notEmpty(),
  body("date_of_delivery").notEmpty(),

  updateDelivery
);
deliveryApp.delete("/:id", employeeMiddleware, deleteDelivery);

export default deliveryApp;
