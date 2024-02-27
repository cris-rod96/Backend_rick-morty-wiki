import { Router } from "express";
import { userControllers } from "../../controllers/index.controller.js";

const router = Router();

router.post("/register", userControllers.registerUser);
router.put("/edit/:id", userControllers.updateUser);
router.delete("/delete/:id", userControllers.deleteUser);

export default router;
