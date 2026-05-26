import { Router } from "express"
import { verifyToken } from "../middlewares/verifyToken.js"
import { getAllStreak, updateStreak } from "../controllers/streak.controller.js"

const router = Router()

router.get("/streaks", verifyToken, getAllStreak)
router.patch("/streaks", verifyToken, updateStreak )


export default router