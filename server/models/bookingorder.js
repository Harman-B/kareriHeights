
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingorderSchema = new Schema({
    
    uid:String,
    status:Boolean,
    buid:String,
   
});

module.exports = mongoose.model('bookingorder', bookingorderSchema, 'bookingorder');