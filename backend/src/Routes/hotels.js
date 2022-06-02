const express = require("express");
const router = express.Router();
const auth = require('../Middleware/auth')
const hotelOp = require('../controllers/hotels.controller')


router.post('/hotels',auth,hotelOp.hotels)
router.get('/hotels',hotelOp.hotelList);
router.delete('/hotels/:_id',auth,hotelOp.deleteHotel)

router.post('/bookings',hotelOp.hotelBooking)
router.get('/bookings',hotelOp.bookingList)
router.delete('/booking/:_id',hotelOp.deleteBooking)

router.post('/rooms',hotelOp.rooms)
module.exports = router;