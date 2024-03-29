import { Router } from "express";
import authRoutes from "./auth/index.route.js";
import characterRoutes from "./character/index.route.js";
import favoriteRoutes from "./favorite/index.route.js";
import userRoutes from "./user/index.route.js";
const router = Router();

router.use("/auth", authRoutes);
router.use("/characters", characterRoutes);
router.use("/favorites", favoriteRoutes);
router.use("/users", userRoutes);

export default router;
