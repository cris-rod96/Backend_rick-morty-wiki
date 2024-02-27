import { request, response } from "express";
import { jwtHelper } from "../../helpers/index.helpers.js";
import { User } from "../../database/index.database.js";

const validateToken = async (req = request, res = response, next) => {
  try {
    const token = req.header("x-token");
    if (!token)
      return res.status(401).json({
        msg: `Permiso denegado. No se encontró un token en la petición`,
      });

    const { id } = jwtHelper.verifyToken(token);
    if (!id)
      return res.status(401).json({
        msg: `Permiso denegado. El token enviado no es correcto.`,
      });

    const user = await User.findByPk(id);
    if (!user)
      return res.status(401).json({
        msg: `Permiso denegado. Usuario no encontrado`,
      });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: `Permiso denegado. El token ingresado no es válido`,
    });
  }
};

export default { validateToken };
