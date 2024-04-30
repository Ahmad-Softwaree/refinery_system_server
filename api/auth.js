import db from "../database/config.js";
import { generateToken } from "../functions/functions.js";
import bcrypt from "bcrypt";

export const getAuth = async (req, res) => {
  try {
    const data = await db("user")
      .where("id", req.user.id)
      .select(
        "name",
        "gender",
        "email",
        "age",
        "id",
        "phone",
        "salary",
        "role"
      );
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  try {
    let data = await db("user").where("email", req.body.email);

    if (
      data[0] &&
      (await bcrypt.compare(req.body.password, data[0].password))
    ) {
      data = await db("user")
        .where("email", req.body.email)
        .select(
          "name",
          "gender",
          "email",
          "age",
          "id",
          "phone",
          "salary",
          "role"
        );
      return res.status(200).json({
        data: data[0],
        token: await generateToken({ id: data[0].id, role: data[0].role }),
      });
    } else return res.status(400).json({ message: "Wrong Cred" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const data = await db("user").insert(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateProfile = async (req, res) => {
  try {
    let data = await db("user").where("id", req.user.id).update(req.body);
    data = await db("user")
      .where("id", req.user.id)
      .select(
        "name",
        "gender",
        "email",
        "age",
        "id",
        "phone",
        "salary",
        "role"
      );
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
