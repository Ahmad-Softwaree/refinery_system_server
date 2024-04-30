import db from "../database/config.js";
const { PAGINATION } = process.env;

export const getCustomers = async (req, res) => {
  let pages = parseInt(req.query.pages);
  let offset = (pages - 1) * PAGINATION;
  try {
    const data = await db("customer")
      .orderBy("id", "asc")
      .offset(offset)
      .limit(PAGINATION);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCustomer = async (req, res) => {
  try {
    const data = await db("customer").andWhere("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const addCustomer = async (req, res) => {
  try {
    let data = await db("customer").insert(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateCustomer = async (req, res) => {
  try {
    let data = await db("customer")
      .andWhere("id", req.params.id)
      .update(req.body);
    data = await db("customer").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteCustomer = async (req, res) => {
  try {
    await db("customer").andWhere("id", req.params.id).del();
    return res.status(200).json({ data: req.param.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
