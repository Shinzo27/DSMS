import { catchAsyncErrors } from '../Middleware/CatchAsyncError.js'
import ErrorHandler from '../Middleware/ErrorHandler.js'
import UserDetails from '../Models/UserDetails.js';

export const postUserDetails = catchAsyncErrors(async(req,res,next)=>{
    try {
        const user = req.user;

        const { address, city, state, pincode } = req.body;

        if(!address || !city || !state || !pincode) return next(new ErrorHandler("Enter All Details Properly!", 400))

        const userDetail = UserDetails.create({
            user: user._id,
            address,
            city,
            state,
            pincode
        })

        res.status(200).json({
            success: true,
            message: "User Details Entered Successfully!"
        })
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    }
})

export const getUserDetails = catchAsyncErrors(async(req,res,next)=>{
    try {
        const user = req.user;

        const userDetail = await UserDetails.find({ user: user._id});

        res.status(200).json({
            userDetail
        })
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
    }
})

export const getDetails = catchAsyncErrors(async(req,res,next)=>{
    try{
        const id = req.params.id;

        const details = await UserDetails.findOne({_id: id})

        if(!details) return next(new ErrorHandler("Cannot find details with this id!", 400))

        res.status(200).json({
            details
        })
    } catch {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
})

export const updateDetail = catchAsyncErrors(async(req,res,next)=>{
    try {
        const detailId = req.params.id
        const update = req.body;
        const query = { _id: detailId }

        await UserDetails.findOneAndUpdate(query, update, {new: true})

        res.status(200).json({
            success: true,
            message: "Details Updated Successfully"
        })
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
})

export const deleteDetail = catchAsyncErrors(async(req,res,next)=>{
    try {
        const detailId = req.params.id

        await UserDetails.deleteOne({ _id: detailId })

        res.status(200).json({
            success: true,
            message: "Details Deleted Successfully"
        })
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
})