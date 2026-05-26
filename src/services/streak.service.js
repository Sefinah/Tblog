import { pool } from "../config/db.js"


export const getAllStreakService = async (userId) =>{
    try {
        const streaks = await pool.query(`
            SELECT *,
            (last_streak_date < CURRENT_DATE - INTERVAL '1 day') AS is_streak_broken 
            FROM streaks
            WHERE user_id = $1`, [userId])
            console.log(streaks)
            if (streaks.rows.length === 0 || streaks.rows[0].is_streak_broken){
                return {currentStreak: 0}
            }
            return {
                currentStreak: streaks.rows[0].streak_count, 
                lastActivity: streaks.rows[0].last_streak_date
            }

    } catch (error) {
        throw error
    }
}

export const updateStreakService = async (userId) =>{
    try {
        const updateStreak = await pool.query(`
            INSERT INTO streaks (user_id, streak_count, last_streak_date) 
            VALUES($1, 1, CURRENT_DATE)
            ON CONFLICT (user_id) DO UPDATE SET streak_count = CASE 
            WHEN streaks.last_streak_date = CURRENT_DATE THEN streaks.streak_count
            WHEN streaks.last_streak_date = CURRENT_DATE - INTERVAL '1 day' THEN streaks.streak_count + 1
            ELSE 1
            END, 
            last_streak_date = CURRENT_DATE
            RETURNING streak_count
            `, [userId])
            console.log(updateStreak)
            return{
                currentStreak: updateStreak.rows[0].streak_count            
            }
    } catch (error) {
        console.log(error)
        throw error
    }
}