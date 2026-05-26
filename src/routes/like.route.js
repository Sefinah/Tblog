import { Router } from "express"
import { verifyToken } from "../middlewares/verifyToken.js"
import { createlike, getBookLike, unlike } from "../controllers/like.controller.js"



const router = Router()

router.post("/likes", verifyToken, createlike)
router.get("/likes", verifyToken, getBookLike)
router.delete("/likes/:id", verifyToken, unlike)
// router.patch("/likes/:id", verifyToken, unlike)

export default router