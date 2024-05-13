import { catchAsyncErrors } from "../Middleware/CatchAsyncError.js";
import ErrorHandler from "../Middleware/ErrorHandler.js";
import Review from "../Models/Review.js";

export const addReview = catchAsyncErrors(async(req,res,next)=>{
    const productId = req.params.id;
    const { rating, comment } = req.body
    const userId = req.user.id;

    if( !rating ) return next(new ErrorHandler("Please Select Product Ratings"))

    const create = await Review.create({
        productId,
        userId,
        rating,
        comment
    })

    return res.status(200).json({
        success: true,
        message: "Review Added Successfully!"
    })
})

export const displayReview = catchAsyncErrors(async(req,res,next)=>{
    const productId = req.params.id;

    const reviews = await Review.find({productId}).populate('userId')

    return res.status(200).json({
        reviews
    })
})