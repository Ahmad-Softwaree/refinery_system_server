import express from "express";
import { managerMiddleware } from "../middleware/auth/manager.js";
import {
  getConfig,
  getPetReceipts,
  getProductReceipts,
} from "../api/config.js";

const configApp = express.Router();

configApp.get("/config", managerMiddleware, getConfig);
configApp.get("/pet_receipt", managerMiddleware, getPetReceipts);
configApp.get("/product_receipt", managerMiddleware, getProductReceipts);

export default configApp;
