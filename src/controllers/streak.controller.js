import { getAllStreakService, updateStreakService } from "../services/streak.service.js"


export const getAllStreak = async (req, res) =>{
    try {
        const userId = req.user.userId
        const result = await getAllStreakService(userId)
        return res.status(201).json({
            message: 'streak gotten',
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const updateStreak = async (req,res) =>{
    try {
        const userId = req.user.userId
        const result = await updateStreakService(userId)
        return res.status(201).json({
            message: "streak updated sucessfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}