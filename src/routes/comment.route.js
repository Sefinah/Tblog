import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { createComment, deleteComment, getBookComment, updateComment } from "../controllers/comment.controller.js";

const router = Router()

router.post("/comments", verifyToken, createComment)
router.get("/comments", verifyToken, getBookComment)
router.delete("/comments", verifyToken, deleteComment)
router.patch("/comments", verifyToken, updateComment )


export default router