import { catchAsyncErrors } from "../Middleware/CatchAsyncError.js";
import ErrorHandler from "../Middleware/ErrorHandler.js";
import Category from "../Models/Category.js";

export const addCategory = catchAsyncErrors(async(req,res,next)=>{
    const { name } = req.body;

    if(!name) return next(new ErrorHandler("Please Enter Category Name",400))
    
    const category = await Category.create({
        name
    })

    return res.status(200).json({
        success: true,
        message: "Category Added Successfully!"
    })
})

export const getCategory = catchAsyncErrors(async(req,res,next)=>{
    const allCategories = await Category.find({});

    return res.status(200).json({
        allCategories
    })
})

export const updateCategory = catchAsyncErrors(async(req,res,next)=>{
    const { name } = req.body;
    const id =  req.params.id;

    const update = await Category.findOneAndUpdate({ _id:id }, { name }, {new: true});

    return res.status(200).json({
        success: true,
        message: "Category Updated!"
    })

})

export const deleteCategory = catchAsyncErrors(async(req,res,next)=>{
    const id = req.params.id;

    const deleteCategory = await Category.deleteOne({_id: id});

    res.status(200).json({
        success: true,
        message: "Category Deleted Successfully!"
    })
})