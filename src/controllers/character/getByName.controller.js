import { Op } from "sequelize";
import { Character } from "../../database/index.database.js";

export default async (req, res) => {
  try {
    const { name } = req.query;
    console.log(name);
    const characters = await Character.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return characters.length > 0
      ? res.status(200).json(characters)
      : res.status(400).json({
          msg: "No se encontaron coincidencias",
        });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
