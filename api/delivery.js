import db from "../database/config.js";
const { PAGINATION } = process.env;

export const getDeliveries = async (req, res) => {
  let pages = parseInt(req.query.pages);
  let offset = (pages - 1) * PAGINATION;
  try {
    const data = await db("delivery").offset(offset).limit(PAGINATION);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDelivery = async (req, res) => {
  try {
    const data = await db("delivery").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const addDelivery = async (req, res) => {
  try {
    let data = await db("delivery").insert(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateDelivery = async (req, res) => {
  try {
    let data = await db("delivery").where("id", req.params.id).update(req.body);
    data = await db("delivery").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteDelivery = async (req, res) => {
  try {
    await db("delivery").where("id", req.params.id).del();
    return res.status(200).json({ data: req.param.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
