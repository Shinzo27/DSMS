import { Schema, model } from 'mongoose';

var categorySchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
}, {timestamps: true});

const Category = model('Category', categorySchema);

export default Category