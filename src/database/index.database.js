import { Sequelize } from "sequelize";
import { DATABASE_URI } from "../config/index.config.js";

const conn = new Sequelize(DATABASE_URI, { logging: false, native: false });

export { conn };
