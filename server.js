import express from 'express'
import { isDbConnected } from './src/config/db.js'

const app = express()
app.use(express.json())













app.listen(3000, () => {
    console.log('server is running on port 3000')
    isDbConnected()
})