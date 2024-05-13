import { Schema, model } from 'mongoose'; 

var feedbackSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
    title:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
}, { timestamps: true });

const Feedback = model('Feedback', feedbackSchema);

export default Feedback