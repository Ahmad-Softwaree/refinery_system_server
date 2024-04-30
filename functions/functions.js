import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { JWT_SECRET } = process.env;

export const generateToken = async (value) => {
  const token = jwt.sign({ id: value.id, role: value.role }, JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};
