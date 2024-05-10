import express from 'express'
import userRouter from './Routes/User.js'
import messageRouter from './Routes/Message.js'
import userDetailsRouter from './Routes/UserDetails.js'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import cors from 'cors'
import { errorMiddleware } from './Middleware/ErrorHandler.js'
import mongoose from 'mongoose'
import { checkForAuthentication } from './Utils/Auth.js'

const PORT = 8000 || process.env.PORT

const app = express()
config({path: './.env'})

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDb Connected!"))

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(checkForAuthentication("CustomerToken"))

app.get('/', (req,res)=>{
    console.log("Hello")
    res.send("Hello")
})

app.use('/api/v1/user', userRouter)
app.use('/api/v1/message', messageRouter)
app.use('/api/v1/userDetails', userDetailsRouter)

app.use(errorMiddleware)

app.listen(PORT, (req,res)=>{
    console.log("Server Started")
})