import { pool } from "../config/db.js"
import { getAllviewService, ViewService } from "../services/view.service.js"


export const createViews = async (req,res) =>{
    try {
        const userId = req.user.userId
        const {bookId}=req.body
        console.log(userId,bookId)
        if (!bookId || !userId){
            return res.status(400).json({
            message: "all fields required"
        })
    }    
    const result = await ViewService({userId, bookId})
    return res.status(201).json({
        message: "views created successfully",
        data: result
    }) 

    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const getAllView = async (req, res)=>{
    try {
        const result = await getAllviewService()
        return res.status(201).json({
            message: "views gotten successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}