import { Router } from "express";
import { authControllers } from "../../controllers/index.controller.js";

const router = Router();

router.post("/signin", authControllers.login);

export default router;
