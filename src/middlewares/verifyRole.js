

export const verifyRole = async (requiredRoles) => {
    return (req,res,next)=>{
    try {
        const role = req.user.role
        if (!role){
            return res.status(404).json({
                message: "role not found"
            })
        }
        if (!requiredRoles.includes(role)){
            return res.status(403).json({
                message: "you are not authorized"
            })
        }
        next()
    } catch (error) {
        throw error
    }
    } 
} 