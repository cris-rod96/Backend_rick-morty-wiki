export default async (req, res) => {
  try {
    const user = req.user;
    user.status = false;
    await user.save();
    return res.status(200).json({
      msg: `Su cuenta ha sido eliminada con éxito`,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
