import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import authApp from "./routes/auth.js";
import managerApp from "./routes/manager.js";
import employeeApp from "./routes/employee.js";
import petApp from "./routes/pet.js";
import productApp from "./routes/product.js";
import veterinaryApp from "./routes/veterinary.js";
import clinicApp from "./routes/clinic.js";
import customerApp from "./routes/customer.js";
import shopApp from "./routes/shop.js";
import configApp from "./routes/config.js";
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
app.use("/api/manager", managerApp);
app.use("/api/employee", employeeApp);
app.use("/api/veterinary", veterinaryApp);
app.use("/api/pet", petApp);
app.use("/api/product", productApp);
app.use("/api/clinic", clinicApp);
app.use("/api/customer", customerApp);
app.use("/api/shop", shopApp);
app.use("/api/config", configApp);

app.listen(PORT, () => {
  console.log("Server Start...");
});
