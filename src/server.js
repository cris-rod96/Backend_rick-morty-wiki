import express from "express";
import morgan from "morgan";
import routes from "./routes/index.routes.js";

const server = express();

// Middlewares
server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Controll-Allow-Origin", "*");
  res.header("Access-Controll-Allow-Credentials", "true");
  res.header(
    "Access-Controll-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.header("Access-Controll-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
  next();
});
// server.use("/api/v1", routes);
server.use("/", routes);

export default server;
