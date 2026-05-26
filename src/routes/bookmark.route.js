
import { Router } from "express";
import { createBookmark, deleteBookmark, getAllBookmark } from "../controllers/bookmark.controller.js"
import { verifyToken } from "../middlewares/verifyToken.js"


const router = Router()
router.post("/bookmarks", verifyToken, createBookmark)
router.get("/bookmarks", verifyToken, getAllBookmark)
router.delete("/bookmarks/:id", verifyToken, deleteBookmark)


export default router