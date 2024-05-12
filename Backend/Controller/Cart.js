import { catchAsyncErrors } from "../Middleware/CatchAsyncError.js";
import ErrorHandler from "../Middleware/ErrorHandler.js";
import Product from '../Models/Product.js'
import Cart from "../Models/Cart.js";

export const addToCart = catchAsyncErrors(async(req,res,next)=>{
    const productId = req.params.id;
    const userId = req.user._id;
    const { quantity, ptype } = req.body;
    console.log(ptype)
    if(!userId) return next(new ErrorHandler("User Not Logged In!", 400))

    if(!quantity || !ptype) return next(new ErrorHandler("Please Enter Quantity!"))
    
    const checkIfExist = await Cart.findOne({productId, packType: ptype})
    if(checkIfExist) return next(new ErrorHandler("Product already exists in the cart!", 400))
    
    const prod = await Product.findOne({_id: productId})

    var kg;
    if(ptype === "250gm"){
        kg = parseInt(quantity) * 0.25;
    }
    else if (ptype === "500gm") {
        kg = parseInt(quantity) * 0.5;
    } else if (ptype === "1kg") {
        kg = parseInt(quantity) * 1;
    }

    if(prod.quantity > kg) {
        const price = prod.price
        var prodPrice;
        if(ptype === "250gm"){
            prodPrice = price / 4;
        } else if ( ptype === "500gm") {
            prodPrice = price / 2;
        } else if ( ptype === "1kg") {
            prodPrice = price / 1;
        }
        var totalPrice = quantity * prodPrice;

        const insert = await Cart.create({
            userId,
            productId,
            quantity,
            packType: ptype,
            totalPrice
        })

        if(insert) return res.status(200).json({
            success: true,
            message: "Product added to the cart successfully!"
        })
    } else {
        return next(new ErrorHandler("Not Enough Quantity!", 400))
    }
})

export const displayCartItems = catchAsyncErrors(async(req,res,next)=>{
    const userId = req.user._id;

    const cartItems = await Cart.find({userId})

    return res.status(200).json({
        cartItems
    })
})

export const removeCartItem = catchAsyncErrors(async(req,res,next)=>{
    const _id = req.params.id;

    const remove = await Cart.deleteOne({_id})

    if(remove) return res.status(200).json({
        success: true,
        message: "Item removed successfully!"
    })
    else {
        return res.status(400).json({
            message: "Item not found!"
        })
    }
})