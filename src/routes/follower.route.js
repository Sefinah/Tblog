import { Router } from "express"
import { verifyToken } from "../middlewares/verifyToken.js"
import { createFollower, getAllFollower, unfollow } from "../controllers/follower.controller.js"


const router = Router()
router.post("/follower", verifyToken, createFollower)
router.get("/follower", verifyToken, getAllFollower)
router.delete("/follower", verifyToken, unfollow)



export default router