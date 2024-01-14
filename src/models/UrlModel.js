const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const User= require("./userModel");
const UrlSchema = new Schema({
    originalUrl: {
        type : String,
        required : true
    },
    shortUrl: {
        type : String,
        required : true,
        unique : true
    },
    clicks : {
        type : Number,
        default: 0
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
   /* user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }*/
});

const Url= mongoose.model(`Url`, UrlSchema);
module.exports = Url;