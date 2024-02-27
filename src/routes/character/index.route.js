import { Router } from "express";
import { characterControllers } from "../../controllers/index.controller.js";

const router = Router();

router.post("/create", characterControllers.addCharacter);
router.delete("/delete/:id", characterControllers.deleteCharacter);

export default router;
