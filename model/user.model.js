import mongoose from 'mongoose'
const Schema=mongoose.Schema
const userAuthSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    roles:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Role"
        }
    ]
},{timestamps:true})

const UserAuth=mongoose.model("UserAuth",userAuthSchema)
export default UserAuth