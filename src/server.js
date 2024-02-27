import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import routes from "./routes/index.routes.js";
config();

const server = express();

// Middlewares
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/api/v1", routes);

export default server;
