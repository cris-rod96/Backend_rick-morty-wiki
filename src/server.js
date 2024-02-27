import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
config();
const server = express();

// Middlewares
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

export default server;
