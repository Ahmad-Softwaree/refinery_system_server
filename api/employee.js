import db from "../database/config.js";
const { PAGINATION } = process.env;

export const getEmployees = async (req, res) => {
  let pages = parseInt(req.query.pages);
  let offset = (pages - 1) * PAGINATION;
  try {
    const data = await db("user")
      .orderBy("id", "asc")
      .where("role", "employee")
      .offset(offset)
      .limit(PAGINATION);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const data = await db("user")
      .where("role", "employee")
      .andWhere("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const makeManager = async (req, res) => {
  try {
    let data = await db("user")
      .where("id", req.params.id)
      .update({ role: "manager" });
    data = await db("user").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateEmployee = async (req, res) => {
  try {
    let data = await db("user")
      .where("role", "employee")
      .andWhere("id", req.params.id)
      .update(req.body);
    data = await db("user").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEmployee = async (req, res) => {
  try {
    await db("user")
      .where("role", "employee")
      .andWhere("id", req.params.id)
      .del();
    return res.status(200).json({ data: req.param.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
