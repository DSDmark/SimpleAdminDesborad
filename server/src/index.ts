// environment varible configare
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routes from './routes/index'

const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 8000

// database configare
import './config/db'

// routes
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`)
})
