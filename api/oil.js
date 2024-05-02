import db from "../database/config.js";
const { PAGINATION } = process.env;

export const getOils = async (req, res) => {
  let pages = parseInt(req.query.pages);
  let offset = (pages - 1) * PAGINATION;
  try {
    const data = await db("oil").offset(offset).limit(PAGINATION);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOil = async (req, res) => {
  try {
    const data = await db("oil").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const addOil = async (req, res) => {
  try {
    let data = await db("oil").insert(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateOil = async (req, res) => {
  try {
    let data = await db("oil").where("id", req.params.id).update(req.body);
    data = await db("oil").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteOil = async (req, res) => {
  try {
    await db("oil").where("id", req.params.id).del();
    return res.status(200).json({ data: req.param.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
