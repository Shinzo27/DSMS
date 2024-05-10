import mongoose, { Schema } from 'mongoose';

var userDetailsSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    pincode:{
        type: String,
        required:true
    }
});

const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

export default UserDetails