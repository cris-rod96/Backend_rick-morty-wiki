export default async (req, res) => {
  try {
    const user = req.user;
    const favorites = await user.getCharacters();

    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
