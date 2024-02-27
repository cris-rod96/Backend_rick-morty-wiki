import { Router } from "express";
import { characterControllers } from "../../controllers/index.controller.js";
import { check } from "express-validator";
import { validatorHelper } from "../../helpers/index.helpers.js";
import { validatorFieldsMiddleware } from "../../middlewares/index.middlewares.js";

const router = Router();

router.get("/list", characterControllers.getAll);
router.get(
  "/view/:id",
  [
    check("id", "El id del personaje es obligatorio").not().isEmpty(),
    check("id").custom(validatorHelper.characterExist),
    validatorFieldsMiddleware,
  ],
  characterControllers.getByID
);
router.get("/search", characterControllers.getByName);

export default router;
