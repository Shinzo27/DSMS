import { Schema, model } from 'mongoose';

var productSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    imageUrl:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    quantity:{
        type:String,
        required:true,
    },
    price: {
        type: Number,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
        enum: ["true", "false"]
    },
    category: {
        type: String,
        require: true
    }
}, { timestamps: true });

const Product = model('Product', productSchema);

export default Product