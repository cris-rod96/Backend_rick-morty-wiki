import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.routes.js";

const server = express();

// Middlewares
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

// server.use("/api/v1", routes);
server.use("/", routes);

export default server;
