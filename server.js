import express from 'express'
import { isDbConnected } from './src/config/db.js'
import authRoute from './src/routes/auth.route.js' 
import genreRoute from './src/routes/genre.route.js'
import bookRoute from './src/routes/book.route.js'

const app = express()
app.use(express.json())

app.use(authRoute)
app.use(genreRoute)
app.use(bookRoute)












app.listen(3000, () => {
    console.log('server is running on port 3000')
    isDbConnected()
})