
import { pool } from "../config/db.js"


export const bookService = async (data) => {
    try {
        const bookResult = await pool.query(`
            INSERT INTO books(user_id, title, genre_id, description, cover_image, content, status) 
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`, [data.userId, data.title, data.genreId, data.description, data.coverImage, data.content, data.status ])
            return bookResult.rows
    } catch (error) {
        throw error
    }
}

export const getAllbookService = async() => {
    try {
        const allBook = await pool.query ('SELECT * FROM books')
    console.log(allBook.rows)
    return allBook.rows
    } catch (error) {
        throw error
    }
    
}

export const deleteBookService = async(id) => {
    try {
        const idExist = await pool.query('SELECT id FROM books WHERE ID = $1', [id])
        console.log(idExist.rows)
        if(idExist.rows.length === 0){
            throw new Error('book not found')
        }
        const deleteBook = await pool.query('DELETE FROM books WHERE id = $1', [id])
        console.log(deleteBook.rows)
        return deleteBook.rows

    } catch (error) {
        throw error
    }
}

export const updateBookService = async(id, userId, title, genreId, description, coverImage, content, status) => {
    try {
        const idExist = await pool.query('SELECT id FROM books WHERE id = $1', [id])
        console.log(idExist.rows)
    
        if (idExist.rows.length === 0){
            throw new Error ('book not found')
        }
        const newBook = await pool.query(`
            UPDATE books SET
            user_id = COALESCE ($1, user_id),
            title = COALESCE ($2, title),
            genre_id = COALESCE ($3, genre_id),
            description = COALESCE ($4, description),
            cover_image = COALESCE ($5, cover_image),
            content = COALESCE ($6, content),
            status = COALESCE ($7, status)
            WHERE id = $8 RETURNING *`, [userId, title, genreId, description, coverImage, content, status, id])
            console.log(newBook.rows)
            return newBook.rows
    } catch (error) {
        throw error
    }
}