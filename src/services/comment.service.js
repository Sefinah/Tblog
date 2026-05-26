import { pool } from "../config/db.js"


export const commentService = async (data) =>{
    try {
        const commentResult = await pool.query(`
            INSERT INTO books(user_id, book_id, comment)
            VALUES ($1, $2, $3)
            RETURNING *`, [data.userId, data.bookId, data.comment])
            return commentResult.rows
    } catch (error) {
        throw error
    }
}

export const getBookCommentService = async(id)=>{
    try {
        const allComment = await pool.query(`SELECT *,
            (SELECT COUNT(*) )
            
            FROM comments WHERE id = $1`, [id])
        console.log(allComment.rows)
        return allComment.rows
    } catch (error) {
        throw error
    }
}

export const deleteCommentService = async(id,userId)=>{
    try {
        const idExist = await pool.query('SELECT id FROM comments WHERE id = $1 AND user_id = $2', [id, userId])
        console.log(idExist.rows)

        if (idExist.rows.length === 0){
            throw new Error('Comment not found')
        }
        const deleteComment = await pool.query('DELETE FROM comments WHERE id = $1', [id])
        return deleteComment.rows
    } catch (error) {
        throw error
    }
}

export const updateCommentService = async (id, userId, bookId, comment) => {
    try {
        const idExist = await pool.query('SELECT id FROM comments WHERE id = $1', [id])
        console.log(idExist.rows)
        if (idExist.rows.length === 0){
            throw new Error('comment not found')
        }
        const newComment = await pool.query (`
            UPDATE comments SET
            user_id = COALESCE ($1, user_id),
            book_id = COALESCE ($2, book_id),
            comment = COALESCE ($3, comment)
            WHERE id = $4 RETURNING *`, [userId, bookId, comment, id])
            console.log(newComment.rows)
            return newComment.rows

    } catch (error) {
        throw Error
    }
}