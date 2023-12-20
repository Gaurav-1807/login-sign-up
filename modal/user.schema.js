const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    email : String,
    password : String
})

const userschema = mongoose.model("user", Userschema)
module.exports= userschema