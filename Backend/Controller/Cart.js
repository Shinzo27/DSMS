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

    const cartItems = await Cart.find({userId}).populate('productId')

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

export const increaseQuantity = catchAsyncErrors(async(req,res,next)=>{
    const _id = req.params.id;

    const cartProduct = await Cart.findOne({_id})
    var prodPrice;
    const productId = cartProduct.productId
    const prod = await Product.findOne({_id: productId})
    
    console.log(cartProduct.totalPrice)
    if(cartProduct.packType === "250gm"){
        prodPrice = prod.price / 4;
    } else if ( cartProduct.packType === "500gm") {
        prodPrice = prod.price / 2;
    } else if ( cartProduct.packType === "1kg") {
        prodPrice = prod.price / 1;
    }
    
    const newPrice = cartProduct.totalPrice + prodPrice;
    const newQuantity = parseInt(cartProduct.quantity) + 1;

    const update = await Cart.findOneAndUpdate({_id}, {totalPrice: newPrice, quantity: newQuantity}, {new: true})

    if(update) {
        return res.status(200).json({
            success: true,
            message: "Product Quantity Increased!"
        })
    } else {
        return res.status(400).json({
            success: false,
            message: "Not Updated!"
        })
    }
})

export const reduceQuantity = catchAsyncErrors(async(req,res,next)=>{
    const _id = req.params.id;

    const cartProduct = await Cart.findOne({_id})

    if(cartProduct.quantity <= 1) return next(new ErrorHandler("Quantity cannot be reduced more than 1!", 400))
    
    var prodPrice;
    const productId = cartProduct.productId
    const prod = await Product.findOne({_id: productId})
    
    console.log(cartProduct.totalPrice)
    if(cartProduct.packType === "250gm"){
        prodPrice = prod.price / 4;
    } else if ( cartProduct.packType === "500gm") {
        prodPrice = prod.price / 2;
    } else if ( cartProduct.packType === "1kg") {
        prodPrice = prod.price / 1;
    }
    
    const newPrice = cartProduct.totalPrice - prodPrice;
    const newQuantity = parseInt(cartProduct.quantity) - 1;

    const update = await Cart.findOneAndUpdate({_id}, {totalPrice: newPrice, quantity: newQuantity}, {new: true})

    if(update) {
        return res.status(200).json({
            success: true,
            message: "Product Quantity Reduced!"
        })
    } else {
        return res.status(400).json({
            success: false,
            message: "Not Updated!"
        })
    }
})