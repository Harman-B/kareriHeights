
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingunitSchema = new Schema({
    
    fromdate:Date,
    todate:Date,
    activityid:String,
   
});

module.exports = mongoose.model('bookingunit', bookingunitSchema, 'bookingunit');