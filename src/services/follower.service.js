import { pool } from "../config/db.js"

export const followerService = async(data) =>{
    try {
        const followerResult = await pool.query(`
            INSERT INTO followers (user_id)
            VALUES ($1)
            RETURNING *`, [data.userId])
            return followerResult.rows
    } catch (error) {
        throw error
    }
}

export const getAllFollowerService = async (req, res) =>{
    try {
        const allFollower = await pool.query('SELECT * FROM followers')
        console.log(allFollower.rows)
        return allFollower.rows
    } catch (error) {
        throw error
    }
}

export const unfollowService = async(id) =>{
    try {
        const idExist = await pool.query('SELECT id FROM followers WHERE id = $1', [id])
        console.log(idExist.rows)
        if (idExist.rows.length === 0){
            throw new Error('Follower not found')
        }
        const deleteFollower = await pool.query('DELETE id FROM followers WHERE id = $1', [id])
        return deleteFollower.rows
    } catch (error) {
        throw error
    }
}
