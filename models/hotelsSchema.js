const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Hotel schema
const hotel_details = new mongoose.Schema({
    _id : {
        type : Number
    },
    hotel :  {
        type : String,
        required : [true,'Hotel name is required']
    },
    location : {
        type : String,
        required : [true,'Hotel name is required']
    },
    stars : {
        type : Number
    },
    room : [{type : Schema.Types.ObjectId,ref : 'Room'}]
})

const hotels = mongoose.model('hotels',hotel_details);

module.exports = hotels;