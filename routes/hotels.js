const express = require("express");
const router = express.Router();
const adminAuth = require('../middleware/adminAuth')
const userAuth = require('../middleware/userAuth')
const hotelOp = require('../controllers/hotels.controller')
/**  
 * @swagger
 *   tags:
 *      name: Hotel
 *      description: API's to manage hotels.
 */
/**  
 * @swagger
 *   tags:
 *      name: Booking
 *      description: API's to manage booking.
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          hotels:
 *              type: object
 *              properties:
 *                  _id:
 *                      type: integer
 *                  hotel:
 *                      type: string
 *                  location:
 *                      type: string
 *                  stars:
 *                      type: integer
 *                  room:
 *                      type: object
 *                      properties:
 *                          roomNumber:
 *                              type: integer
 *                          type:
 *                              type: string
 *                          price:
 *                              type: integer
 *                          guests:
 *                              type: integer    
 *                  token:
 *                        type: string
 *                  
 */


/**
 * @swagger
 * /hotels:
 *  post:
 *      security:          
 *        - bearerAuth: []
 *      tags: [Hotel]
 *      summary: To add hotels to the database
 *      description: This is used to add the hotel to the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/hotels'
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
 *    tags: [Hotel]
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
 *                          $ref: '#components/schemas/hotels'
 */
router.get('/hotels',hotelOp.hotelList);
/**
 * @swagger
 * /deleteHotel:
 *  delete:
 *      security:          
 *        - bearerAuth: []
 *      summary: deleting hotel API
 *      tags: [Hotel]
 *      description: For deleting Hotel
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     required:
 *                       - Name
 *                       - location   
 *                     properties:
 *                         Name:
 *                            type: string
 *                            description : Hotel Name 
 *                         location:
 *                            type: string
 *      responses:
 *          '201':
 *              description: Hotel deleted Successfully,
 *          '400':
 *              description: hotel does not exist
 */
router.delete('/hotels/:Name',adminAuth,hotelOp.deleteHotel)

/**
 * @swagger
 *  components:
 *      schemas:
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
 *    tags: [Booking]
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
 *                          $ref: '#components/schemas/booking'
 */
router.get('/bookings',userAuth,hotelOp.bookingList)
/**
 * @swagger
 * /bookings:
 *  post:
 *      tags: [Booking]
 *      summary: To book the hotel
 *      description: This is used to add the booking to the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/booking'
 *      responses:
 *          '201':
 *              description: Booking successfully added
 *               
 */
router.post('/bookings',hotelOp.hotelBooking)


router.post('/rooms',hotelOp.rooms)
/** 
 * @swagger
 * /hotelByName:
 *  get:
 *      tags: [Hotel]
 *      parameters: 
 *      - in: query
 *        name: Name
 *        type: string
 *        required: true
 *      summary: To get the hotel by name
 *      description: This is used to search the hotel by an specific name
 *      responses:
 *        '200':
 *          description: A successful response
 *          content:
 *              application/json:
 *                    schema:
 *                        type: array
 *                        items:
 *                            $ref: '#components/schemas/hotelSchema'
 *      '404':
 *          description: No Hotels Found
 *               
 */
router.get('/hotelByName',hotelOp.hotelByName)
router.get('/',(req,res) => {
    res.send('It help you to get the best hotel near by you')
})
module.exports = router;
