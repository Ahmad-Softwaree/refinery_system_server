import db from "../database/config.js";
const { PAGINATION } = process.env;

export const getEmployees = async (req, res) => {
  let pages = parseInt(req.query.pages);
  let offset = (pages - 1) * PAGINATION;
  try {
    const data = await db("user")
      .where("role", "employee")
      .join("department", "user.dep_id", "=", "department.id")
      .select(
        "department.name as dept_name",
        "department.id as dept_id",
        "user.name as user_name",
        "user.email",
        "user.id as user_id",
        "user.position",
        "user.salary",
        "user.age",
        "user.role",
        "user.phone",
        "user.gender"
      )
      .offset(offset)
      .limit(PAGINATION);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const data = await db("user")
      .where("role", "employee")
      .select("name", "id");

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
