import { Schema, model } from 'mongoose';
import jwt from 'jsonwebtoken'
import validator from 'validator'
import bcrypt from 'bcrypt'

var userSchema = new Schema({
    username:{
        type:String,
        required:[true, "Username is Required!"],
        index:true,
        minLength: [5, "Username Must Contain Minimum 5 Letters"]
    },
    email:{
        type:String,
        required:[true, "Email is Required"],
        unique:true,
        validate: [validator.isEmail, "Provide Proper Email"]
    },
    password:{
        type:String,
        required:[true, "Must Enter Password"],
        minLength: [6, "Password Must Contain 6 Letters"]
    },
    role: {
        type: String,
        required: [true, "Must Enter Role"],
        enum: ["Customer", "Admin"]
    }
}, { timestamps: true});

userSchema.pre("save", async function(next){
    if (!this.isModified("password")){
        next()
    } 
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.generateWebToken = function (){
    return jwt.sign({id: this._id, email: this.email}, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES })
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.updatePassword = async function(newPassword) {
   this.password = newPassword
   await this.save();
}

const User = model('User', userSchema);

export default User