import db from "../database/config.js";
const { PAGINATION } = process.env;

export const getVeterinaries = async (req, res) => {
  let pages = parseInt(req.query.pages);
  let offset = (pages - 1) * PAGINATION;
  try {
    const data = await db("user")
      .orderBy("id", "asc")
      .where("role", "veterinary")
      .offset(offset)
      .limit(PAGINATION);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getVeterinary = async (req, res) => {
  try {
    const data = await db("user")
      .where("role", "veterinary")
      .andWhere("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateVeterinary = async (req, res) => {
  try {
    let data = await db("user")
      .where("role", "veterinary")
      .andWhere("id", req.params.id)
      .update(req.body);
    data = await db("user").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteVeterinary = async (req, res) => {
  try {
    await db("user")
      .where("role", "veterinary")
      .andWhere("id", req.params.id)
      .del();
    return res.status(200).json({ data: req.param.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
