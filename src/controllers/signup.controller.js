import { signupService } from "../services/signup.service.js"

const signup = async (req, res) => {
    const {firstName, lastName, userName, email, password} = req.body
    try {
          if (!firstName || !lastName || !userName || !email || !password){
        return res.status(400).json({
            message: "All field required"
        })
    }
        if (password.length < 8){
            return res.staus(400).json({
            message: "password must be at least 8 characters"
            
        })
        }
        
        const result = await signupService({firstName, lastName, userName, email, password})
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
  
}