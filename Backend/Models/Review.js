import { Schema, model } from 'mongoose';

var reviewSchema = new Schema({
    productId:{
        type: Schema.Types.ObjectId,
        required:true,
        ref: 'Product'
    },
    userId:{
        type: Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
    rating:{
        type: Number,
        required:true,
    },
    comment:{
        type:String,
    },
}, { timestamps: true });

const Review = model('Review', reviewSchema);

export default Review