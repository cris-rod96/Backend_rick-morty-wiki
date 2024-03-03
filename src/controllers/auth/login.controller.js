import { User } from "../../database/index.database.js";
import { bcryptHelper, jwtHelper } from "../../helpers/index.helpers.js";

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    const isValid =
      user && (await bcryptHelper.comparePassword(password, user.password));

    if (isValid) {
      const token = jwtHelper.generateToken({
        id: user.id,
        email: user.email,
      });

      return res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          nick: user.nick,
          avatar: user.avatar,
        },

        token,
      });
    }
    return res.status(401).json({ msg: `Credenciales incorrectas` });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
