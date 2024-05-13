import { catchAsyncErrors } from "../Middleware/CatchAsyncError.js";
import ErrorHandler from "../Middleware/ErrorHandler.js";
import Wishlist from "../Models/Wishlist.js";

export const addToWishlist = catchAsyncErrors(async(req,res,next)=>{
    const productId = req.params.id
    const userId = req.user.id

    const wishlist = await Wishlist.create({
        productId,
        userId
    })

    return res.status(200).json({
        success: true,
        message: "Product Added To Wishlist!"
    })
})

export const removeFromWishlist = catchAsyncErrors(async(req,res,next)=>{
    const productId = req.params.id;
    const userId = req.user.id;

    const remove = await Wishlist.deleteOne({
        productId,
        userId
    })
    
    if(remove) return res.status(200).json({
        success: true,
        message: "Product Removed from wishlist!"
    })
})

export const getWishlistProducts = catchAsyncErrors(async(req,res,next)=>{
    const userId = req.user.id;

    const products = await Wishlist.find({ userId })
    
    return res.status(200).json({
        success: true,
        products
    })
})