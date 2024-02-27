import { Router } from "express";
import { favoriteControllers } from "../../controllers/index.controller.js";
import { jwtMiddleware } from "../../middlewares/index.middlewares.js";

const router = Router();

router.get(
  "/list",
  jwtMiddleware.validateToken,
  favoriteControllers.listFavorite
);

router.post(
  "/add",
  jwtMiddleware.validateToken,
  favoriteControllers.addFavorite
);

router.delete(
  "/delete",
  jwtMiddleware.validateToken,
  favoriteControllers.removeFavorite
);

export default router;
