import { commentService, deleteCommentService, getBookCommentService, updateCommentService } from "../services/comment.service.js"


export const createComment = async (req, res) =>{
    try {
        const userId = req.user.userId
        const {bookId, comment}= req.body
        if(!userId || !bookId || !comment){
            return res.status(400).json({
                message: "All fields required"
            })
        }
        const result = await commentService({userId, bookId, comment})
        return res.status(201).json({
            message: "comment created successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const getBookComment = async (req,res)=>{
    try {
        const id = req.params.id
        const result = await getBookCommentService(id)
        return res.status(201).json({
            message: "comment created successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const deleteComment = async(req,res)=>{
    try {
        const id = req.params.id
        const userId = req.user.userId
        const result = await deleteCommentService(id,userId)
        return res.status(201).json({
            message: "comment not found"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const updateComment = async(req,res) => {
    try {
        const userId = req.user.userId
        const {bookId, comment} = req.body
        const id = req.params.id
        const result = await updateCommentService(id, userId, bookId, comment)
        return res.status(201).json({
            message: "comment updated successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }

}