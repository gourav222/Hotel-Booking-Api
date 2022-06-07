const hotelModel = require("../models/hotelsSchema.js");
const bookingModel = require("../models/bookingSchema.js");
const roomModel = require('../models/roomSchema');

const response = {
    status : "Added successfully",
    statuscode : 201
}

const hotels = (req,res) => {
    body = req.body
    
    const details = new hotelModel();
        details._id = req.body._id;
        details.hotel = req.body.hotel;
        details.location = req.body.location;
        details.stars = req.body.stars;
        details.room = []
    
    details.save((err) => {
        if(!err){
            res.send("Added successfully");
        }
        else{
            res.send(err);
        }
    })
}

const hotelList = (req,res) => {
    hotelModel.find().then(result => {
        res.send({data:result});
    }).catch(err => {
        res.send({error:err});
    })
}

const deleteHotel = (req,res) => {
    hotelModel.findOneAndDelete({_id : req.params.id})
    .then(data => {
        res.send(response);
    }).catch(err => {
        res.send("Hotel not deleted from the database");
    })
}

const hotelBooking = (req,res) => {
    body = req.body
    const details = new bookingModel({
        _id : req.body._id,
        hotel : req.body.hotel,
        checkin : req.body.checkin,
        checkout : req.body.checkout,
        guests : req.body.guests
    })
    details.save((err) => {
        if(!err){
            res.send(response);
        }
        else{
            res.send(err);
        }
    })
}

const bookingList = (req,res) => {
    bookingModel.find().then(result => {
        res.send({booking_details:result});
    }).catch(err => {
        res.send({error:err});
    })
}


const deleteBooking = (req,res) => {
    bookingModel.findByIdAndRemove({_id: req.params.id})
    .then( booking => {
        res.send(booking);
    });
}

const rooms = (req,res) => {
    body = req.body;
    const roomDetails = new roomModel({
        roomNumber : req.body.roomNumber,
        type : req.body.type,
        price : req.body.price,
        guests : req.body.guests
    })
    roomDetails.save(err => { 
        if(!err){
            res.send("Added succussfully");
        }
        else{
            res.send(err)
        }
    })
}

module.exports = {hotels,hotelList,deleteHotel,hotelBooking,bookingList,deleteBooking,rooms}