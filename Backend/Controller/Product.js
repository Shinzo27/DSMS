import { catchAsyncErrors } from "../Middleware/CatchAsyncError.js";
import ErrorHandler from "../Middleware/ErrorHandler.js";
import Product from "../Models/Product.js";
import cloudinary from 'cloudinary'

export const addProduct = catchAsyncErrors(async(req,res,next)=>{
    if(!req.files) return next(new ErrorHandler("Please Select Product Image", 400))

    const { name, description, quantity, price, isActive, category } = req.body;
    const { prodImage } = req.files
    const allowedFormats = ["image/png", "image/jpeg", "image/webp", "image/jpg"]

    if(!allowedFormats.includes(prodImage.mimetype)) return next(new ErrorHandler("File Format Not Supported!", 400))
    
    if(!name || !description || !quantity || !price || !isActive || !category) return next(new ErrorHandler("Please Fill All Details Properly", 400))

    const checkIfExist = await Product.findOne({name})

    const cloudinaryResponse = await cloudinary.uploader.upload(prodImage.tempFilePath);

    if(!cloudinaryResponse || cloudinaryResponse.error) return next(new ErrorHandler("cloudinary Error", cloudinaryResponse.error))
    
    const product = await Product.create({
        name,
        imageUrl: cloudinaryResponse.secure_url,
        description,
        quantity,
        price,
        isActive,
        category
    })
    if(product) return res.status(200).json({
        success: true,
        messge: "Product Added Successfully!"
    })
})

export const displayProduct = catchAsyncErrors(async(req,res,next)=>{
    const products = await Product.find({isActive: true})

    return res.status(200).json({
        products
    })
})

export const listProducts = catchAsyncErrors(async(req,res,next)=>{
    const allProducts = await Product.find({});

    return res.status(200).json({
        allProducts
    })
})

export const getCategoryProduct = catchAsyncErrors(async(req,res,next)=>{
    const category = req.params.category;

    const categoryProductList = await Product.find({category, isActive: 'true'})

    res.status(200).json({
        categoryProductList
    })
})

export const deleteProduct = catchAsyncErrors(async(req,res,next)=>{
    const _id = req.params.id;

    const deleteItem = await Product.deleteOne({ _id })

    res.status(200).json({
        message: "Product Deleted Successfully!"
    })
})