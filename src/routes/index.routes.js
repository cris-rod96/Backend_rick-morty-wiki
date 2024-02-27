import { Router } from "express";
import userRoutes from "./user/index.route.js";

const router = Router();

router.use("/users", userRoutes);

export default router;
