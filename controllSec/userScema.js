const express =require("express")
const { required } = require("nodemon/lib/config")
const mongoose = require("mongoose")
const Schema= mongoose.Schema
const userSchema = new Schema({

    name:{
        type : String ,
        required:[true,"please enter the name"]
    }
   , email:{
        type : String ,
        required:[true,"please enter the email"]
    }
  , password:{
        type : String ,
        required:[true,"please enter the password"]
    }
})
module.exports= mongoose.model('userr',userSchema)