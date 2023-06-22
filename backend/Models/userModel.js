const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,  
        },
        pic:{
            img:String,
            required:true,
            default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false,
        }
    },
    {
        timestamps:true,
    }
);


module.exports = mongoose.Model("User", messageModel);