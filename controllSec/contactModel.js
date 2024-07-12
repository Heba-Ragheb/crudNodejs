const express = require("express")
const mongoose = require("mongoose")
const { required } = require("nodemon/lib/config")
const Schema = mongoose.Schema
const contactScema = new Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User",
   },
    name:{
        type: String,
        required:[true,"please enter the name"]
    },
    email:{
        type: String,
        required:[true,"please enter the email"]
    },
    phone:{
        type: String,
        required:[true,"please enter the phone"]
    },
})
module.exports=mongoose.model('contact',contactScema)