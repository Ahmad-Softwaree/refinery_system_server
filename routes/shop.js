import express from "express";
import { employeeMiddleware } from "../middleware/auth/employee.js";
import { adopt, buy } from "../api/shop.js";

const shopApp = express.Router();

shopApp.post("/adopt/:pet_id/:customer_id", employeeMiddleware, adopt);
shopApp.post("/buy/:product_id/:customer_id", employeeMiddleware, buy);

export default shopApp;
