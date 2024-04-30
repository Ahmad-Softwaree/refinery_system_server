import db from "../database/config.js";

export const checkPet = async (req, res) => {
  try {
    let pet = await db("pet").where("id", req.body.pet_id);
    if (pet[0].checked) {
      await db("pet").where("id", req.body.pet_id).update({ checked: false });
      var data = null;
    } else {
      await db("pet").where("id", req.body.pet_id).update({ checked: true });
      var data = await db("clinic").insert(req.body);
    }
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
