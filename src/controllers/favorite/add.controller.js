export default async (req, res) => {
  try {
    const user = req.user;
    const { characterID } = req.body;
    const characterExist = await user.hasCharacter(characterID);

    if (!characterExist) {
      await user.addCharacter(characterID);
      await user.save();

      return res.status(200).json({
        msg: `Agregado a favoritos correctamente`,
      });
    }
    return res.status(400).json({
      msg: "Este personaje ya ha sido agregado anteriormente",
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.response}`,
    });
  }
};
