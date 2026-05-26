import { Result } from "pg"
import { bookmarkservice, deleteBookmarkService, getAllBookmarkService } from "../services/bookmark.service.js"


export const createBookmark = async(req, res) =>{
    try {
        const userId = req.user.userId
        const{bookId} = req.body
        if(!bookId){
            return res.status(400).json({
                message: "All fields required"
                
            })
        }
        const result = await bookmarkservice ({userId, bookId})
        return res.status(201).json({
            message: "bookmark created successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const getAllBookmark = async (req,res) =>{
    try {
        const userId = req.user.userId
        const result = await getAllBookmarkService(userId)
        return res.status(201).json({
            message: "bookmarked successfully",
            data: result
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const deleteBookmark = async (req,res) =>{
    try {
        const bookId = req.params.id
    const result = await deleteBookmarkService(bookId)
    return res.status(201).json({
        message: "bookmark removed successfully"
    })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }  
}