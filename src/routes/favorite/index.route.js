import { Router } from "express";
import { favoriteControllers } from "../../controllers/index.controller.js";
import {
  jwtMiddleware,
  validatorFieldsMiddleware,
} from "../../middlewares/index.middlewares.js";
import { check } from "express-validator";
import { validatorHelper } from "../../helpers/index.helpers.js";

const router = Router();

router.get(
  "/list",
  jwtMiddleware.validateToken,
  favoriteControllers.listFavorite
);

router.post(
  "/add",
  jwtMiddleware.validateToken,
  [
    check("characterID", "El ID del personaje es obligatorio").not().isEmpty(),
    check("characterID").custom(validatorHelper.characterExist),
    validatorFieldsMiddleware,
  ],
  favoriteControllers.addFavorite
);

router.delete(
  "/delete/:characterID",
  jwtMiddleware.validateToken,
  favoriteControllers.removeFavorite
);

export default router;
