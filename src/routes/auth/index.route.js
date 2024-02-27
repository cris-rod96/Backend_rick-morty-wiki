import { Router } from "express";
import { authControllers } from "../../controllers/index.controller.js";
import { check } from "express-validator";
import { validatorFieldsMiddleware } from "../../middlewares/index.middlewares.js";

const router = Router();

router.post(
  "/signin",
  [
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email no es un email válido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validatorFieldsMiddleware,
  ],
  authControllers.login
);

export default router;
