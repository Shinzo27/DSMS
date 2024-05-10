import { Schema, model } from 'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
var messageSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    message:{
        type:String,
        required:true,
    },
}, { timestamps: true });

const Message = model('Message', messageSchema);

export default Message