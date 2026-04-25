import jwt from 'jsonwebtoken'

export const generateToken = async (userId, role) => {
    const myJwtSecret = "justeat234jdunjkajxnhdikxhh"
    try {
        const payLoad = {
            user: {userId, role}
        }
        const token = jwt.sign (payLoad, myJwtSecret, {
            expiresIn: "24h"
        })
        return token 
    } catch (error) {
        console.log 
        return new Error ('jwt error')
    }
}