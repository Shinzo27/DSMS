import { catchAsyncErrors } from "../Middleware/CatchAsyncError.js";
import ErrorHandler from "../Middleware/ErrorHandler.js";
import Feedback from "../Models/Feedback.js";

export const addFeedback = catchAsyncErrors(async(req,res,next)=>{
    const { title, comment } = req.body;
    const userId = req.user.id;

    if(!title || !comment) return next(new ErrorHandler("Please Fill All Details!", 400))
        
    const feedback = await Feedback.create({
        userId,
        title,
        comment
    })

    return res.status(200).json({
        success: true,
        message: "Feedback Submitted!"
    })
})

export const getFeedback = catchAsyncErrors(async(req,res,next)=>{
    
    const feedbacks = await Feedback.find({})

    return res.status(200).json({
        feedbacks
    })
})