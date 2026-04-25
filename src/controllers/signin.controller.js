import { signInService } from "../services/signin.service.js"

export const signin = async (req, res) => {
    const {identifier, password} = req.body
    try {
        if (!identifier || !password){
            return res.status(400).json({
                message: "All fields required"
            })
        }
        const result = await signInService({identifier, password})
        return res.status(200).json({
            message: "signin successfully", 
            data: result
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "signin successful",
            error: error.message
        })
    }
}