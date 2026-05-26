import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { createViews, getAllView } from "../controllers/view.controller.js";






const router = Router()
router.post("/views", verifyToken, createViews)
router.get("/views", verifyToken, getAllView )

export default router