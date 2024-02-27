import { Router } from "express";
import { characterControllers } from "../../controllers/index.controller.js";
import { jwtMiddleware } from "../../middlewares/index.middlewares.js";

const router = Router();
router.post(
  "/create",
  jwtMiddleware.validateToken,
  characterControllers.addCharacter
);
router.delete(
  "/delete/:id",
  jwtMiddleware.validateToken,
  characterControllers.deleteCharacter
);

export default router;
