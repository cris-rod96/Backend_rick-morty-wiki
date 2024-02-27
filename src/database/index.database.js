import { Sequelize } from "sequelize";
import { DATABASE_URI } from "../config/index.config.js";
import { CharacterModel, UserModel } from "../models/index.models.js";

const conn = new Sequelize(DATABASE_URI, { logging: false, native: false });

UserModel(conn);
CharacterModel(conn);

const { User, Character } = conn.models;

User.belongsToMany(Character, { through: "Favorite_Characters" });
Character.belongsToMany(User, { through: "Favorite_Characters" });

export { conn, User, Character };
