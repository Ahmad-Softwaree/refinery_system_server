import db from "../database/config.js";
const { PAGINATION } = process.env;

export const getManagers = async (req, res) => {
  let pages = parseInt(req.query.pages);
  let offset = (pages - 1) * PAGINATION;
  try {
    const data = await db("user")
      .orderBy("id", "asc")
      .where("role", "manager")
      .orWhere("role", "high_manager")
      .andWhereNot("id", req.user.id)
      .offset(offset)
      .limit(PAGINATION);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getManager = async (req, res) => {
  try {
    const data = await db("user")
      .where("role", "manager")
      .orWhere("role", "high_manager")
      .andWhere("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const makeEmployee = async (req, res) => {
  try {
    let data = await db("user")
      .where("id", req.params.id)
      .update({ role: "employee" });
    data = await db("user").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const makeHighManager = async (req, res) => {
  try {
    let data = await db("user")
      .where("id", req.params.id)
      .update({ role: "high_manager" });
    data = await db("user").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateManager = async (req, res) => {
  try {
    let data = await db("user")
      .where("role", "manager")
      .andWhere("id", req.params.id)
      .update(req.body);
    data = await db("user").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteManager = async (req, res) => {
  try {
    let data = await db("user")
      .where("role", "manager")
      .andWhere("id", req.params.id)
      .del();
    return res.status(200).json({ data: req.param.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
