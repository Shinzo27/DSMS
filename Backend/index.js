import express from 'express'
import userRouter from './Routes/User.js'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import cors from 'cors'
import { errorMiddleware } from './Middleware/ErrorHandler.js'
import mongoose from 'mongoose'

const PORT = 8000 || process.env.PORT

const app = express()
config({path: './config.env'})

mongoose.connect('mongodb://127.0.0.1:27017/Dsms').then(()=>console.log("MongoDb Connected!"))

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    console.log("Hello")
    res.send("Hello")
})

app.use('/api/v1/user', userRouter)

app.use(errorMiddleware)

app.listen(PORT, (req,res)=>{
    console.log("Server Started")
})