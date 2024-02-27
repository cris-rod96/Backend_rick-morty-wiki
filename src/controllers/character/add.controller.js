import { Character } from "../../database/index.database.js";

export default async (req, res) => {
  try {
    const { id } = req.user;
    const character = req.body;
    await Character.create({ ...character, userID: id });
    return res.status(200).json({
      msg: `Personaje agregado`,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
