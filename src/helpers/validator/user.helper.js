import { User } from "../../database/index.database.js";

export default async (email = "") => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if(user) throw new Error("Email no disponible")
};
