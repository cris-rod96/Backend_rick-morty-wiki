import { Op } from "sequelize";
import { Character } from "../../database/index.database.js";

export default async (req, res) => {
  try {
    const { name, limit = 10, page = 1 } = req.query;
    console.log(name);
    const { count, rows: characters } = await Character.findAndCountAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      offset: (page - 1) * limit,
      limit,
    });

    const numPages = Math.ceil(count / limit);
    const prevPage = Number(page) - 1 > 0;
    const nextPage = Number(page) + 1 < numPages;
    const currentPage = Number(page);

    return characters.length > 0
      ? res.status(200).json({
          characters,
          numPages,
          currentPage,
          prevPage,
          nextPage,
        })
      : res.status(400).json({
          msg: "No se encontaron coincidencias",
        });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
