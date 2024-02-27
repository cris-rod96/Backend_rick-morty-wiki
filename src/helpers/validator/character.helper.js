import { Character } from "../../database/index.database.js";

export default async (id = "") => {
  const character = await Character.findByPk(id);
  if (!character) throw new Error("Personaje no encontrado");
};
