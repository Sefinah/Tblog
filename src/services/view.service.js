import { pool } from "../config/db.js"



export const ViewService = async(data)=>{
    try {
        const viewResult = await pool.query(`
            INSERT INTO views(book_id, user_id)
            VALUES ($1,$2)
            returning *`, [data.bookId, data.userId])
            console.log(viewResult.rows)
            return viewResult.rows
    } catch (error) {
        throw error
    }
}

export const getAllviewService = async ()=>{
    try {
        const allView = await pool.query ('SELECT * FROM views')
        console.log(allView.rows)
        
        return allView.rows
    } catch (error) {
       throw error
    }
}