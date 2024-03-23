import { Character } from "../../database/index.database.js";

export default async (req, res) => {
  try {
    // Paginado
    const { limit = 10, page = 1 } = req.query;
    const { count, rows: characters } = await Character.findAndCountAll({
      offset: (page - 1) * limit,
      limit,
    });
    const numPages = Math.ceil(count / limit);
    const prevPage = Number(page) - 1 > 0;
    const nextPage = Number(page) + 1 < numPages;
    const currentPage = Number(page);

    return res.status(200).json({
      characters,
      numPages,
      currentPage,
      prevPage,
      nextPage,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
