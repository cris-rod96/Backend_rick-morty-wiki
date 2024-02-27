export default async (req, res) => {
  try {
    const user = req.user;
    const { characterID } = req.body;

    const characterExist = await user.hasCharacter(characterID);

    if (characterExist) {
      await user.removeCharacter(characterID);
      await user.save();
      return res.status(200).json({
        msg: `El personaje ha sido quitado de los favoritos`,
      });
    }
    return res.status(404).json({
      msg: `Personaje no encontrado`,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
