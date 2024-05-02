import express from "express";
import { body } from "express-validator";
import { employeeMiddleware } from "../middleware/auth/employee.js";
import {
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
  addOrder,
} from "../api/order.js";

const orderApp = express.Router();

orderApp.get("/", employeeMiddleware, getOrders);
orderApp.get("/:id", employeeMiddleware, getOrder);
orderApp.post(
  "/",
  employeeMiddleware,
  body("price").notEmpty(),
  body("location").notEmpty(),
  body("oil_id").notEmpty(),
  body("amount_of_barel").notEmpty(),
  addOrder
);
orderApp.put(
  "/:id",
  employeeMiddleware,
  body("price").notEmpty(),
  body("location").notEmpty(),
  body("oil_id").notEmpty(),
  body("amount_of_barel").notEmpty(),
  updateOrder
);
orderApp.delete("/:id", employeeMiddleware, deleteOrder);

export default orderApp;
