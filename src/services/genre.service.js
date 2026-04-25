import { pool } from "../config/db.js"


export const genreService = async(name) =>{
    try {
      const nameExist = await pool.query('SELECT name FROM genre WHERE name = $1',[name]) 
      console.log(nameExist.rows)
      if (nameExist.rows.length > 0){
        throw new Error('name has been taken')
      }
      const genreResult = await pool.query('INSERT INTO genre(name) VALUES ($1) RETURNING *', [name])
      return genreResult.rows
    } catch (error) {
        throw error
    }
}

export const getAllGenreService = async() =>{
    try {
        const allGenre = await pool.query ('SELECT * FROM genre')
        console.log(allGenre.rows)
        return allGenre.rows
    } catch (error) {
        throw error
    }
}

export const deleteGenreService = async(id) => {
    try {
        const idExist = await pool.query('SELECT id FROM genre where id = $1', [id])
        console.log(idExist.rows)
        if (idExist.rows.length === 0){
            throw new Error('Genre not found')
        }
        const deleteGenre = await pool.query ('DELETE FROM genre WHERE id = $1', [id])
        console.log(deleteGenre.rows)
        return deleteGenre.rows
    
    } catch (error) {
        throw error
    }
}

export const updateGenreService = async(id,name) => {
    try {
        const idExist = await pool.query('SELECT id FROM genre WHERE id = $1', [id])
        console.log(idExist.rows)
        if (idExist.rows.length === 0){
            throw new Error('Genre not found')
        }
        const newGenre = await pool.query (`UPDATE genre SET
            name = COALESCE ($1, name)
            WHERE id = $2 RETURNING *`, [name, id])
            console.log(newGenre.rows)
            return newGenre.rows
    } catch (error) {
        throw error
    }
}