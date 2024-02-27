import { Router } from "express";
import { userControllers } from "../../controllers/index.controller.js";
import { check } from "express-validator";
import {
  jwtMiddleware,
  validatorFieldsMiddleware,
} from "../../middlewares/index.middlewares.js";
import { validatorHelper } from "../../helpers/index.helpers.js";

const router = Router();

router.post(
  "/register",
  [
    check("nick", "El nick es obligatorio").not().isEmpty(),
    check("email", "El email del usuario es obligatorio").not().isEmpty(),
    check("email", "El email ingresado no es válido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("email").custom(validatorHelper.userExist),
    validatorFieldsMiddleware,
  ],
  userControllers.registerUser
);
router.put("/edit", jwtMiddleware.validateToken, userControllers.updateUser);
router.delete(
  "/delete",
  jwtMiddleware.validateToken,
  userControllers.deleteUser
);

export default router;
