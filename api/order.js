import db from "../database/config.js";
const { PAGINATION } = process.env;

export const getOrders = async (req, res) => {
  let pages = parseInt(req.query.pages);
  let offset = (pages - 1) * PAGINATION;
  try {
    const data = await db("order")
      .join("oil", "order.oil_id", "=", "oil.id")
      .select(
        "order.amount_of_barel as amount_of_barel",
        "order.id as order_id",
        "order.price as price",
        "order.location as location",
        "oil.name as oil_name"
      )
      .offset(offset)
      .limit(PAGINATION);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const data = await db("order").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const addOrder = async (req, res) => {
  try {
    let data = await db("order").insert(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateOrder = async (req, res) => {
  try {
    let data = await db("order").where("id", req.params.id).update(req.body);
    data = await db("order").where("id", req.params.id);
    return res.status(200).json({ data: data[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteOrder = async (req, res) => {
  try {
    await db("order").where("id", req.params.id).del();
    return res.status(200).json({ data: req.param.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
