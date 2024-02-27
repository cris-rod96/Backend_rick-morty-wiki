import { bcryptHelper } from "../../helpers/index.helpers.js";

export default async (req, res) => {
  try {
    const user = req.user;
    const data = req.body;
    if (data.password) {
      data.password = await bcryptHelper.encryptPasssword(data.password);
    }
    await user.update({ ...data }, { where: { id } });
    await user.save();
    return res.status(200).json({
      msg: `La información ha sido actualizada con éxito`,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
