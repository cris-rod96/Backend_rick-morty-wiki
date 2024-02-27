import server from "./src/server.js";
import { HOST_PORT } from "./src/config/index.config.js";

server.listen(HOST_PORT, () => {
  console.log(`Server listening in PORT: ${HOST_PORT}`);
});
