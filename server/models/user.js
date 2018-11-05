
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    name:String,
    email:String,
    age:Number,
    gender: Boolean,
    address:String,
    phone: String,
    map:String,
    type:String,
    govid:String,
    file:String
});

module.exports = mongoose.model('user', userSchema, 'user');