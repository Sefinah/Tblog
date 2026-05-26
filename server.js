import express from 'express'
import { isDbConnected } from './src/config/db.js'
import authRoute from './src/routes/auth.route.js' 
import genreRoute from './src/routes/genre.route.js'
import bookRoute from './src/routes/book.route.js'
import viewRoute from './src/routes/view.route.js'
import likeRoute from './src/routes/like.route.js'
import commentRoute from './src/routes/comment.route.js'
import followerRoute from './src/routes/follower.route.js'
import bookmarkRoute from './src/routes/bookmark.route.js'
import streakRoute from './src/routes/streak.route.js'

const app = express()
app.use(express.json())

app.use(authRoute)
app.use(genreRoute)
app.use(bookRoute)
app.use(viewRoute)
app.use(likeRoute)
app.use(commentRoute)
app.use(followerRoute)
app.use(bookmarkRoute)
app.use(streakRoute)









app.listen(3000, () => {
    console.log('server is running on port 3000')
    isDbConnected()
})