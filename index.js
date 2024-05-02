import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import authApp from "./routes/auth.js";
import employeeApp from "./routes/employee.js";
import configApp from "./routes/config.js";
import departmentApp from "./routes/department.js";
import oilApp from "./routes/oil.js";
import storageApp from "./routes/storage.js";
import orderApp from "./routes/order.js";
import deliveryApp from "./routes/delivery.js";
import machineApp from "./routes/machine.js";
dotenv.config();

const { PORT } = process.env;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/auth", authApp);
app.use("/api/employee", employeeApp);
app.use("/api/config", configApp);
app.use("/api/department", departmentApp);
app.use("/api/oil", oilApp);
app.use("/api/storage", storageApp);
app.use("/api/order", orderApp);
app.use("/api/delivery", deliveryApp);
app.use("/api/machine", machineApp);

app.listen(PORT, () => {
  console.log("Server Start...");
});
