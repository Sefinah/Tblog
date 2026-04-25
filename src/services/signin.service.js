import { pool } from "../config/db.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/generatetoken.js"

export const signInService = async (data) => {
    try {
        const userExist = await pool.query (`SELECT * FROM users WHERE email = $1 OR user_name = $1`, 
            [data.identifier])
            if ((userExist).rows.length == 0){
                throw new Error ('Invalid credentials')
            }
            console.log ("this is userexist response from database", userExist)
            const user = userExist.rows[0]
            const isMatch = await bcrypt.compare (data.password, user.password)
            if (!isMatch){
                throw new Error ('invalid credentials')
            }
            const token = await generateToken(user.id, user.role)
            console.log ('this is a generated token', token)
            return {
                user: {   
                id: user.id, 
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                role: user.role,
                userName: user.user_name 
                },
                token: token
            }
    } catch (error) {
        console.log (error)
       throw error  
    }
}