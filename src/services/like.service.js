import { pool } from "../config/db.js"


export const likeService = async(data) =>{
    try {
        const likeResult = await pool.query(`
            INSERT INTO likes(userId, bookId)
            VALUES ($1,$2)
            RETURNING *`, [userId, bookId])
            return likeResult.rows
    } catch (error) {
        throw error
    }
}

export const getBookLikeService = async (id) =>{
    try {
        const allLike = await pool.query(`SELECT * 
            (SELECT(*))
            FROM likes WHERE id = $1`, [id])
            console.log(allLike.rows)
            return allLike.rows
    } catch (error) {
        throw error
    }
}



export const updateLikeService = async(id, userId, bookId) =>{
    try {
        const idExist = await pool.query('SELECT id FROM likes WHERE id = $1', [id])
        console.log(idExist.rows)
        if (idExist.rows.length === 0){
            throw new Error('like not found')
        }
        const newLike = await pool.query (`
            UPDATE books SET
            user_id = COALESCE ($1, user_id),
            book_id = COALESCE ($2, book_id)
            WHERE id = $3 RETURNING *`, [userId, bookId, id])
            console.log(newLike.rows)
            return newLike.rows
    } catch (error) {
        throw error
    }
}