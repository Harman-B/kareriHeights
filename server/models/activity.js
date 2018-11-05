
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    title: String,
    name:String,
    duration:String,
    price:Number,
    location:String,
    description: String,
    termsandconditions:String,
    status:Boolean,
    uid:String
});

module.exports = mongoose.model('activity', activitySchema, 'activity');