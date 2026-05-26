import {Pool} from 'pg'
import { addConstraint, addLastActiveDate, bookmarkTable, bookTable, commentTable, followerTable, genreTable, likeTable, streakTable, userTable, viewTable } from '../models/createuserstable.js'


export const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'Tblog',
    password: 'lagos2026',
    port: 5432
})

export const isDbConnected = async () => {
    try {
        const res = await pool.query ("SELECT NOW ()")
        console.log('db connected', res.rows[0])
    } catch (error) {
       console.log("db not connected", error.message) 
    }
}

export const createTable = async () => {
    const client = await pool.connect()
    try {
        await client.query(userTable)
        console.log('user table created')
        await client.query(genreTable)
        console.log('genre table created')
        await client.query(bookTable)
        console.log('book table created')
        await client.query(likeTable)
        console.log('like table created')
        await client.query(commentTable)
        console.log('comment table created')
        await client.query(followerTable)
        console.log('follower table created')
        await client.query(bookmarkTable)
        console.log('bookmark table created')
        await client.query(streakTable)
        console.log('streak table created')
        await client.query(viewTable)
        console.log('view table created')
        console.log('all tables created successfully')
        await client.query(addLastActiveDate)
        console.log('streaks table updated')
        await client.query(addConstraint)
        console.log('constraint updated on streaks table ')

    } catch (error) {
        console.log('error from createtable', error)
    } finally{
        client.release()
    }
}

