import db from "../database/config.js";
const { PAGINATION } = process.env;

export const getMachines = async (req, res) => {
  let pages = parseInt(req.query.pages);
  let offset = (pages - 1) * PAGINATION;
  try {
    const data = await db("machine").offset(offset).limit(PAGINATION);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMachine = async (req, res) => {
  try {
    const data = await db("machine").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const addMachine = async (req, res) => {
  try {
    let data = await db("machine").insert(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateMachine = async (req, res) => {
  try {
    let data = await db("machine").where("id", req.params.id).update(req.body);
    data = await db("machine").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteMachine = async (req, res) => {
  try {
    await db("machine").where("id", req.params.id).del();
    return res.status(200).json({ data: req.param.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
