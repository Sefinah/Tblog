import { pool } from "../config/db.js"


export const signupService = async (data ) => {
    const emailExist = await pool.query('SELECT * FROM users WHERE email = $1', [data.email])
    console.log(emailExist.rows)
    if (emailExist.rows.length > 0){
        throw new Error('Email already exist') 
    }
    const usernameExist = await pool.query('SELECT * FROM users WHERE user_name = $1', [data.userName])
    console.log(usernameExist)
    if (usernameExist.rows.length > 0){
        throw new Error('username already exist')
    }

}
