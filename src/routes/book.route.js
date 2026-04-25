
import { Router } from "express";
import { createBook, deleteBook, getAllBook, updateBook } from "../controllers/book.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { verifyRole } from "../middlewares/verifyRole.js";



const router = Router()
router.post("/books", verifyToken, verifyRole(["writer"]), createBook)
router.get("/books", verifyToken, getAllBook)
router.delete("/books/:id", verifyToken, deleteBook)
router.patch("/books/:id", verifyToken, updateBook)

export default router