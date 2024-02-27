import { User } from "../../database/index.database.js";
import { bcryptHelper } from "../../helpers/index.helpers.js";

export default async (req, res) => {
  try {
    const { password } = req.body;
    const hash = await bcryptHelper.encryptPasssword(password);

    await User.create({
      ...req.body,
      password: hash,
    });

    return res.status(200).json({
      msg: `Usuario registrado con éxito`,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
