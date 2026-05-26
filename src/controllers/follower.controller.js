import { followerService, getAllFollowerService, unfollowService } from "../services/follower.service.js"


export const createFollower = async (req,res) => {
    try {
        const userId = async (req, res) =>{
            const {userId} = req.body
            if(!userId){
                return res.status(201).json({
                    message: "all fields required",
                })
            }
        } 
        const result = await followerService ({userId})
        return res.status(201)({
            message: "follower created successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const getAllFollower = async (req, res) =>{
    try {
        const result = await getAllFollowerService()
        return res.status(201).json({
            message: "follower created successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const unfollow = async (req,res) =>{
    try {
        const id = req.params.id
        const result = await unfollowService(id)
        return res.status(201).json({
            message: "follower not found"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}


