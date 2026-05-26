

import {getBookLikeService, likeService, updateLikeService } from "../services/like.service.js"


export const createlike = async (req, res) =>{
    try {
        const userId = req.user.userId
        const{bookId} = req.body
        if (!userId || !bookId){
            return res.status(400).json({
                message: "all fields required"
            })
        }
        const result = await likeService ({userId, bookId})
        return res.status(201).json({
            message: "like created successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const getBookLike = async (req,res) =>{
    try {
        const id = req.params.id
        const result = await getBookLikeService(id)
        return res.status(201).json({
            message: "likes gotten successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const unlike = async (req,res) =>{
    try {
        const id = req.params.id
        const result = await updateLikeService()
        return res.status(201).json({
            message: "like updated successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

