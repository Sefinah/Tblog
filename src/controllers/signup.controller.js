import { signupService } from "../services/signup.service.js"

export const signup = async (req, res) => {
    const {role, firstName, lastName, userName, email, password} = req.body
    try {
          if (!role || !firstName || !lastName || !userName || !email || !password){
        return res.status(400).json({
            message: "All field required"
        })
    }
        if (password.length < 8){
            return res.status(400).json({
            message: "password must be at least 8 characters"
        })
        }
        const result = await signupService({role, firstName, lastName, userName, email, password})
        res.status(201).json({
            message: 'User created successfully', 
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
}