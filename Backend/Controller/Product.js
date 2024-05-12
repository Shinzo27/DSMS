import { catchAsyncErrors } from "../Middleware/CatchAsyncError.js";
import ErrorHandler from "../Middleware/ErrorHandler.js";
import Product from "../Models/Product.js";
import cloudinary from 'cloudinary'


//add product
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

//update product
export const updateProduct = catchAsyncErrors(async(req,res,next)=>{
    if(!req.files) return next(new ErrorHandler("Please Select Product Image", 400))

    const id = req.params.id;
    const { name, description, quantity, price, isActive, category } = req.body;
    const { prodImage } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp", "image/jpg"]

    if(!name || !description || !quantity || !price || !isActive || !category) return next(new ErrorHandler("Please Fill All Details Properly", 400))

    const cloudinaryResponse = await cloudinary.uploader.upload(prodImage.tempFilePath);

    if(!cloudinaryResponse || cloudinaryResponse.error) return next(new ErrorHandler("cloudinary Error", cloudinaryResponse.error))
    
    const update = await Product.findOneAndUpdate({_id: id}, { name,imageUrl: cloudinaryResponse.secure_url, description, quantity, price, isActive, category }, {new: true})

    return res.status(200).json({
        success: true,
        message: "Product Updated Successfully!"
    })
})

//list product for admin
export const listProducts = catchAsyncErrors(async(req,res,next)=>{
    const allProducts = await Product.find({});

    return res.status(200).json({
        allProducts
    })
})

//list product for client
export const getCategoryProduct = catchAsyncErrors(async(req,res,next)=>{
    const category = req.params.category;

    const categoryProductList = await Product.find({category, isActive: 'true'})

    res.status(200).json({
        categoryProductList
    })
})

//delete product
export const deleteProduct = catchAsyncErrors(async(req,res,next)=>{
    const _id = req.params.id;

    const deleteItem = await Product.deleteOne({ _id })

    res.status(200).json({
        message: "Product Deleted Successfully!"
    })
})

//get single product
export const getSingleProduct = catchAsyncErrors(async(req,res,next)=>{
    const _id = req.params.id;

    const product = await Product.findOne({ _id });

    return res.status(200).json({
        product
    })
})

//update stock
export const updateStock = catchAsyncErrors(async(req,res,next)=>{
    const _id = req.params.id
    const { action, value } = req.body;

    if(!value) return next(new ErrorHandler("Enter The Value", 400));

    const prodDetails = await Product.findOne({_id})

    const quantity = prodDetails.quantity;
    var updateValue;

    if(action === 'reduce'){
        if(value < quantity) {
            updateValue = quantity - value;
        }
        else {
            return next(new ErrorHandler("Value is greater than actual quantity!", 400))
        }
    }
    else if(action === 'increase'){
        updateValue = parseInt(quantity) + parseInt(value)
    }

    const update = await Product.findOneAndUpdate( { _id }, { quantity: updateValue} , {new: true} )

    if(update) {
        return res.status(200).json({
            success: true,
            message: "Product Updated Successfully!"
        })
    }
    else {
        return res.status(400).json({
            message: "Error Occured!"
        })
    }
})

//update status
export const updateStatus = catchAsyncErrors(async(req,res,next)=>{
    const _id = req.params.id;
    const { status } = req.body;

    const update = await Product.findOneAndUpdate({ _id }, { isActive: status }, { new: true });

    if(update) {
        return res.status(200).json({
            success: true,
            message: "Product Status Is Updated!"
        })
    }
    else {
        return res.status(400).json({
            message: "Error Occured!"
        })
    }
})