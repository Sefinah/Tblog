
import { bookService, deleteBookService, getAllbookService, updateBookService } from "../services/book.service.js"


export const createBook = async (req, res) => {
    try {
        const userId = req.user.userId
        console.log("this is the decoded token stored in req.user in verified token",req.user)
        const { title, genreId, description, coverImage, content, status} = req.body
        if (!userId || !title || !genreId || !description || !coverImage || !content || !status){
            return res.status(400).json({
                message: "all fields required"
            })
        }
        const result = await bookService({userId, title, genreId, description, coverImage, content, status})
        return res.status(201).json({
            message: 'book created successfully',
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const getAllBook = async (req,res) =>{
    try {
        const result = await getAllbookService()
        return res.status(201).json({
            message: "book gotten successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const deleteBook = async (req,res) => {
    try {
       const id = req.params.id
       const result = await deleteBookService(id)
       return res.status(201).json({
            message: "book deleted successfully"
       }) 
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const updateBook = async (req,res) => {
    try {
        const userId = req.user.userId
         const {title, genreId, description, coverImage, content, status} = req.body
         const id = req.params.id
         const result = await updateBookService(id, userId, title, genreId, description, coverImage, content, status)
         return res.status(201).json({
            message: "book updated successfully",
            data: result
         })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}