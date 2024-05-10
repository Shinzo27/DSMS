import { catchAsyncErrors } from "../Middleware/CatchAsyncError.js";
import ErrorHandler from "../Middleware/ErrorHandler.js";
import Message from "../Models/Message.js";

export const postMessage = catchAsyncErrors(async(req,res,next)=>{
    const {name, email, message} = req.body;
     
    if( !name || !email || !message ) return next(new ErrorHandler("Enter All The Details", 400))
    
    const enterMessage = await Message.create({
        name,
        email,
        message
    })

    res.status(200).json({
        success: true,
        message: "Message Sent Successfully!"
    })
})

export const getMessage = catchAsyncErrors(async(req,res,next)=>{
    const allMessage = await Message.find({})

    res.status(200).json({
        success: true,
        allMessage
    })
})