import { pool } from "../config/db.js"
import bcrypt from 'bcrypt'

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
    const hashedPassword = await bcrypt.hash(data.password, 10)
    const result = await pool.query(`INSERT INTO users (role, first_name, last_name, user_name, email, password) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, role, first_name, last_name, user_name, email`, 
        [data.role, data.firstName, data.lastName, data.userName, data.email, hashedPassword])
    return result.rows
}
