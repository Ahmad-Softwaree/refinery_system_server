import db from "../database/config.js";
const { PAGINATION } = process.env;

export const getStorages = async (req, res) => {
  let pages = parseInt(req.query.pages);
  let offset = (pages - 1) * PAGINATION;
  try {
    const data = await db("storage")
      .join("oil", "storage.oil_id", "=", "oil.id")
      .select(
        "storage.quantity as quantity",
        "storage.id as storage_id",
        "storage.location as location",
        "oil.name as oil_name"
      )
      .offset(offset)
      .limit(PAGINATION);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getStorage = async (req, res) => {
  try {
    const data = await db("storage").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const addStorage = async (req, res) => {
  try {
    let data = await db("storage").insert(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateStorage = async (req, res) => {
  try {
    let data = await db("storage").where("id", req.params.id).update(req.body);
    data = await db("storage").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteStorage = async (req, res) => {
  try {
    await db("storage").where("id", req.params.id).del();
    return res.status(200).json({ data: req.param.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
