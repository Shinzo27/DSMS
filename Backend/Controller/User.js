import User from '../Models/User.js'
import { generateToken } from '../Utils/Auth.js'
import { catchAsyncErrors } from '../Middleware/CatchAsyncError.js'
import ErrorHandler from '../Middleware/ErrorHandler.js'

export const handleLogin = catchAsyncErrors(async(req,res,next)=>{
    const { email, password } = req.body
})

export const handleRegister = catchAsyncErrors(async(req,res, next)=>{
    const { username, email, password } = req.body
    if( !username || !email || !password ) return next(ErrorHandler("Please Enter All Details"))
    
    const isRegistered = await User.findOne({email})
    if(isRegistered) return next(ErrorHandler("User Already Exists With This Email", 400))
    
    const user = await User.create({
        username,
        email,
        password
    })
    generateToken(user, "User Registered", 200, res);
})