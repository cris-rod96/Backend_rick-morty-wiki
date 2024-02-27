import { User } from "../../database/index.database.js";

export default async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      user.status = false;
      await user.save();
      return res.status(200).json({
        msg: `Su cuenta ha sido eliminada con éxito`,
      });
    }
    return res.status(404).json({
      msg: `Usuario no encontrada`,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
