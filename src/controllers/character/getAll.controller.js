import { Character } from "../../database/index.database.js";

export default async (req, res) => {
  try {
    const characters = await Character.findAll({});

    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
