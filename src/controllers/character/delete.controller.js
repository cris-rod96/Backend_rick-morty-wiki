import { Character } from "../../database/index.database.js";

export default async (req, res) => {
  try {
    const { id } = req.user;
    const { id: characterID } = req.params;

    const deleted = await Character.destroy({
      where: {
        id: characterID,
        userID: id,
      },
    });
    return deleted > 0
      ? res.status(200).json({
          msg: `Personaje eliminado`,
        })
      : res.status(404).json({
          msg: "Personaje no encotrado",
        });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
