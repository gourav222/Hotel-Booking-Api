const express = require("express");
const router = express.Router();
const adminAuth = require('../Middleware/adminAuth')
const userAuth = require('../middleware/userAuth')
const hotelOp = require('../controllers/hotels.controller')

/**
 * @swagger
 *  components:
 *      schema:
 *          hotels:
 *              type: object
 *              properties:
 *                  hotel:
 *                      type: string
 *                  location:
 *                      type: string
 *                  stars:
 *                      type: integer
 *                  Access-token:
 *                      type: string
 */


/**
 * @swagger
 * /hotels:
 *  post:
 *      summary: To add hotels to the database
 *      description: This is used to add the hotel to the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/hotels'
 *      responses:
 *          '201':
 *              description: Added successfully
 *               
 */
router.post('/hotels',adminAuth,hotelOp.hotels)


/**
 * @swagger
 * /hotels:
 *  get:
 *    summary: To get list of all avaiable hotels.
 *    description: This api is used to fetch the data from mongodb. 
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schema/hotels'
 */
router.get('/hotels',hotelOp.hotelList);
router.delete('/hotels/:_id',adminAuth,hotelOp.deleteHotel)

/**
 * @swagger
 *  components:
 *      schema:
 *          booking:
 *              type: object
 *              properties:
 *                  _id:
 *                      type: integer
 *                  hotel:
 *                      type: string  
 *                  checkin:
 *                      type: date
 *                  checkout:
 *                      type: date
 *                  guests:
 *                      type: integer
 *                  Acess-token:
 *                      type: string
 */
/**
 * @swagger
 * /bookings:
 *  get:
 *    summary : To get list of all bookings.
 *    description: This api is used to fetch the data from mongodb.
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schema/booking'
 */
router.get('/bookings',userAuth,hotelOp.bookingList)
/**
 * @swagger
 * /bookings:
 *  post:
 *      summary: To book the hotel
 *      description: This is used to add the booking to the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/booking'
 *      responses:
 *          '201':
 *              description: Booking successfully added
 *               
 */
router.post('/bookings',hotelOp.hotelBooking)
router.delete('/booking/:_id',hotelOp.deleteBooking)

router.post('/rooms',hotelOp.rooms)
module.exports = router;