import { catchAsyncErrors } from "../Middleware/CatchAsyncError.js";
import { instance } from "../index.js";

export const checkout = catchAsyncErrors(async(req,res,next) =>{
    const options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
    };

    const order = await instance.orders.create(options);

    console.log(order);
    res.status(200).json({
        success: true
    })
})