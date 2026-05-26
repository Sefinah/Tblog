
import { pool } from "../config/db.js"
import { updateStreakService } from "./streak.service.js"

export const bookService = async (data) => {
    try {
        const bookResult = await pool.query(`
            INSERT INTO books(user_id, title, genre_id, description, cover_image, content, status) 
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`, [data.userId, data.title, data.genreId, data.description, data.coverImage, data.content, data.status ])
            const wordCount = data.content.trim().split(/\s+/).length
            if (wordCount >= 200) {
            await updateStreakService(data.userId)
        }
        return bookResult.rows
    } catch (error) {
        throw error
    }
}

export const getAllbookService = async() => {
    try {
        const allBook = await pool.query (`SELECT *, 
            (SELECT COUNT(*) FROM views WHERE views.book_id=books.id) AS view_count,
            (SELECT COUNT(*) FROM comments WHERE comments.book_id=books.id) AS comment_count,
            (SELECT COUNT(*) FROM likes WHERE likes.book_id=books.id) AS like_count

            FROM books`)
    console.log(allBook.rows)
    return allBook.rows
    } catch (error) {
        throw error
    }
    
}

export const getBookIdService = async(id) =>{
    try {
        const idExist = await pool.query ('SELECT * FROM books WHERE id = $1', [id])
        console.log(idExist.rows)
        if (idExist.rows.length === 0){
            throw new Error('Book not found')
        }
        const book = await pool.query(`SELECT *,
            (SELECT COUNT(*) FROM views where views.book_id=books.id) AS view_count,
            (SELECT COUNT(*) FROM comments WHERE comments.book_id=books.id) AS comment_count,
            (SELECT COUNT(*) FROM likes WHERE likes.book_id=books.id) AS like_count,
            (SELECT COUNT(*) FROM bookmark WHERE bookmarks.book_id = books.id) AS bookmark_count
            FROM books WHERE id = $1`,[id])
            console.log(book.rows)
            return book.rows
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
            const wordCount = content.trim().split(/\s+/).length
            if (wordCount >= 200){
                await updateStreakService(userId)
            }
            console.log(newBook.rows)
            return newBook.rows
    } catch (error) {
        throw error
    }
}