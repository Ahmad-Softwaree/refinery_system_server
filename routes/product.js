import express from "express";
import { body } from "express-validator";

import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../api/product.js";
import { checkBody } from "../middleware/validation/validation.js";
import { employeeMiddleware } from "../middleware/auth/employee.js";

const productApp = express.Router();

productApp.get("/", employeeMiddleware, getProducts);
productApp.get("/:id", employeeMiddleware, getProduct);
productApp.post(
  "/",
  employeeMiddleware,
  body("name").notEmpty(),
  body("type").notEmpty(),
  body("discount").notEmpty(),
  body("quantity").notEmpty(),
  body("expire_date").notEmpty(),
  checkBody,

  addProduct
);
productApp.put(
  "/:id",
  employeeMiddleware,
  body("name").notEmpty(),
  body("type").notEmpty(),
  body("discount").notEmpty(),
  body("quantity").notEmpty(),
  body("expire_date").notEmpty(),
  checkBody,

  updateProduct
);
productApp.delete("/:id", employeeMiddleware, deleteProduct);

export default productApp;
