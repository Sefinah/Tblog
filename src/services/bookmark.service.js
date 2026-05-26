
import { pool } from "../config/db.js"


export const bookmarkservice = async (data) => {
    try {
      const bookmarkResult = await pool.query(`
        INSERT INTO bookmarks(user_id, book_id)
        VALUES ($1, $2)
        RETURNING *`, [data.userId, data.bookId])
        return bookmarkResult.rows 
    } catch (error) {
        throw error
    }
}

export const getAllBookmarkService = async (userId) =>{
    try {
        const bookmarks = await pool.query(`
            SELECT bookmarks.id, books.title, books.description, books.cover_image, genre.name AS genre_name, bookmarks.created_at

            FROM bookmarks 
            INNER JOIN books ON bookmarks.book_id = books.id
            INNER JOIN genre ON books.genre_id = genre.id
            WHERE bookmarks.user_id = $1`, [userId])
            console.log(bookmarks)
            if (bookmarks.rows.length === 0){
                throw new Error('Bookmark not found')
            }
            return bookmarks.rows
    } catch (error) {
        throw error
    }
}

export const deleteBookmarkService = async (bookId) =>{
    try {
    const deleteBookmark = await pool.query ('DELETE FROM bookmarks WHERE id = $1', [bookId])
    return deleteBookmark.rows
    } catch (error) {
        throw error
    }
}