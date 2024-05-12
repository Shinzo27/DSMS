import { Schema, model } from 'mongoose';

var cartSchema = new Schema({
    userId:{
        type:String,
        required:true,
        index:true,
    },
    productId:{
        type:String,
        required:true,
    },
    quantity:{
        type:String,
        required:true,
    },
    packType:{
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const Cart = model('Cart', cartSchema);

export default Cart