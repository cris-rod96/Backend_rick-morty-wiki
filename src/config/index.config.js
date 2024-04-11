import { config } from "dotenv";
config();

// Desde el config

console.log(process.env.NODE_ENV && "Existe");

export const {
  HOST_PORT,
  DATABASE_URI,
  SECRET_KEY,
  DB_DEPLOY,
  ORIGIN_ACCEPT_URL_DEV,
} = process.env;
