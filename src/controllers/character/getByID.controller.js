import { Character } from "../../database/index.database.js";

export default async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Character.findByPk(id);

    return character
      ? res.status(200).json(character)
      : res.status(404).json({ msg: `Personaje no encontrado` });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
