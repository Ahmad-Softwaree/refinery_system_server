import db from "../database/config.js";
import { faker } from "@faker-js/faker";

export const adopt = async (req, res) => {
  try {
    let pet = await db("pet").where("id", req.params.pet_id);
    let config = await db("config");
    if (pet[0].adopted) {
      await db("pet").where("id", req.params.pet_id).update({ adopted: false });
    } else {
      await db("pet").where("id", req.params.pet_id).update({ adopted: true });
      await db("config").update({
        money: parseInt(config[0].money + pet[0].price),
      });
      await db("pets_purchase").insert({
        pet_id: req.params.pet_id,
        customer_id: req.params.customer_id,
        receipt_number: faker.number.int({ max: 100000 }),
        ...req.body,
      });
    }
    return res.status(200).json({ data: pet });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const buy = async (req, res) => {
  try {
    let product = await db("products").where("id", req.params.product_id);
    let config = await db("config");

    if (product[0].quantity - req.body.quantity <= 0) {
      return res.status(400).json({ message: "You Cannot Buy that Amount" });
    } else {
      await db("products")
        .where("id", req.params.product_id)
        .update({
          quantity: parseInt(product[0].quantity) - parseInt(req.body.quantity),
        });
      await db("config").update({
        money: parseInt(
          config[0].money + parseInt(product[0].quantity) * req.body.quantity
        ),
      });
      await db("product_purchases").insert({
        product_id: req.params.pet_id,
        customer_id: req.params.customer_id,
        receipt_number: faker.number.int({ max: 100000 }),
        ...req.body,
      });
    }
    return res.status(200).json({ data: product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
