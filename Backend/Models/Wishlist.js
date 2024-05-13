import { Schema, model } from 'mongoose';

var wishlistSchema = new Schema({
    userId:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    productId:{
        type:String,
        required:true,
        unique:true,
    },
}, { timestamps: true });

const Wishlist = model('Wishlist', wishlistSchema);

export default Wishlist