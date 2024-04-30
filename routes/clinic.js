import express from "express";
import { veterinaryMiddleware } from "../middleware/auth/veterinary.js";
import { checkPet } from "../api/clinic.js";

const clinicApp = express.Router();

clinicApp.post("/check", veterinaryMiddleware, checkPet);

export default clinicApp;
