import server from "./src/server.js";
import { conn } from "./src/database/index.database.js";
import { HOST_PORT } from "./src/config/index.config.js";

conn
  .sync({ logging: false, force: false })
  .then(() => {
    server.listen(HOST_PORT, () => {
      console.log(`Server listening in PORT: ${HOST_PORT}`);
    });
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error en la conexion: ", err.message);
  });
