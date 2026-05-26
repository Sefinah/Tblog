
import { Router } from "express";
import { createBook, deleteBook, getAllBook, getBookId, updateBook } from "../controllers/book.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { verifyRole } from "../middlewares/verifyRole.js";




const router = Router()
router.post("/books", verifyToken, verifyRole(["admin", "writer"]), createBook)
router.get("/books", verifyToken, getAllBook)
router.get("/book/:id", verifyToken, getBookId)
router.delete("/books/:id", verifyToken, verifyRole(["admin", "writer"]), deleteBook)
router.patch("/books/:id", verifyToken, verifyRole(["admin", "writer"]), updateBook)


export default router