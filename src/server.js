import express from "express";
import morgan from "morgan";
import routes from "./routes/index.routes.js";

const server = express();

// Middlewares
server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});
// server.use("/api/v1", routes);
server.use("/", routes);

export default server;
