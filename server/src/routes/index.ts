import express from "express";
import pingRoutes from "./pingRoutes";
import userRoutes from "./userRoutes";

const router = express.Router();

router.use("/ping", pingRoutes); // Все маршруты /api/ping
router.use("/user", userRoutes); 

export default router;