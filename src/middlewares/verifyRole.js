

// export const verifyRole = async (requiredRoles) => {
//     return (req,res,next)=>{
//     try {
//         const role = req.user.role
//         console.log(role)
//         if (!role){
//             return res.status(404).json({
//                 message: "role not found"
//             })
//         }
//         if (!requiredRoles.includes(role)){
//             return res.status(403).json({
//                 message: "you are not authorized"
//             })
//         }
//         next()
//     } catch (error) {
//         throw error
//     }
//     } 
// } 

export const verifyRole = (requiredRoles) => {
    // requiredRoles = ["admin", "writer"];

    return (req,res,next) => {
        try {
            const role = req.user.role

            if (!role) {
                return res.status(404).json({
                    message:"role not found"
                })
            }

    if (!requiredRoles.includes(role)){
            return res.status(404).json({
              message: "You do not have the access",
            });
    }
            
            next()

            
        } catch (error) {
            return res.status(500).json({
                message: error.message || "something went wrong"
            })
        }
    }
    
}