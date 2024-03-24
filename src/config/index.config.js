import { config } from "dotenv";
config();
export const {
  HOST_PORT,
  DATABASE_URI,
  SECRET_KEY,
  DB_DEPLOY,
  ORIGIN_ACCEPT_URL_DEV,
} = process.env;
