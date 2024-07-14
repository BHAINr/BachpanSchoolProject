const mongoose = require("mongoose");
const validator = require("validator");

const AdmissioFormModel = new mongoose.Schema({
    class: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    firstName: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    email:{
        type:String,
        require:[true,"Please enter your email"],
        unique:true,
        validator:validator.isEmail
    },
    mobileNo:{
        type:Number,
        require:[true,"Please enter your mobile number"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },

})

module.exports = mongoose.model("admissionFM", AdmissioFormModel) ;