import { Router } from "express";
import { createGenre, deleteGenre, getAllGenre, updateGenre } from "../controllers/genre.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { verifyRole } from "../middlewares/verifyRole.js";








const router = Router()
router.post("/genre", verifyToken, verifyRole(["admin"]), createGenre)
router.get("/genre", verifyToken, getAllGenre)
router.delete("/genre/:id", verifyToken, deleteGenre)
router.patch("/genre/:id", verifyToken, updateGenre)


export default router

