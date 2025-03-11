import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        minlength:[3,"Name must be atleast 3 charcters"],
        maxlength:[50,"Name must not exeed 50 charcters"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        lowercase:true,
        trim:true,
        // match:
    },
    password:{type:String,required:true}
})

export default model("User",userSchema)