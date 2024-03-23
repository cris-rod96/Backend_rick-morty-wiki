import { config } from "dotenv";
config();
export const { HOST_PORT, DATABASE_URI, SECRET_KEY, DB_DEPLOY } = process.env;
