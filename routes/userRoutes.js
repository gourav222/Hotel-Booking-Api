const express = require("express");
const router = express.Router();
const userOp = require('../controllers/user.controller')
const userAuth = require('../middleware/userAuth')
/**  
 * @swagger
 *   tags:
 *      name: User
 *      description: API's to manage User.
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
 *          user:
 *              type : object
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string     
 */

/**
 * @swagger
 * /userLogin:
 *  post:
 *      tags: [User]
 *      summary: User login
 *      description: For user login
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/user'
 *      responses:
 *          '201':
 *              description: Added successfully
 *               
 */
router.post('/userLogin',userOp.userLogin)
/**
 * @swagger
 * /userRegister:
 *  post:
 *      tags: [User]
 *      summary: To add a user
 *      description: This is used to add the user details to the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/admin'
 *      responses:
 *          '201':
 *              description: Added successfully
 *               
 */
router.post('/userRegister',userOp.userRegistration)
/**
 * @swagger
 * /users:
 *  get:
 *    tags: [User]
 *    summary: To get list of all registered users.
 *    description: This api is used to fetch the data from mongodb
 *     
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schemas/admin'
 */
router.get('/users',userOp.userList);
/**
 * @swagger
 * /cancelBooking:
 *  delete:
 *      security:          
 *        - bearerAuth: []
 *      summary: cancel Booking API
 *      tags: [Booking]
 *      description: For canceling Booking
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     required:
 *                       - email
 *                       - hotelName
 *                       - location   
 *                       - roomNo
 *                     properties:
 *                         email:
 *                            type: string
 *                         hotelName:
 *                            type: string
 *                            description : Hotel Name 
 *                         location:
 *                            type: string
 *                         roomNo:
 *                            type: integer
 *      responses:
 *          '201':
 *              description: booking canceled Successfully,
 *          '400':
 *              description:  booking does not exist
 */
router.delete('/cancelBooking',userOp.cancelBooking)
/**
 * @swagger
 * /user:
 *  patch:
 *      security:          
 *        - bearerAuth: []
 *      summary: Update users details
 *      tags: [User]
 *      parameters: 
 *      - in: query
 *        id: id
 *        type: string
 *        required: true
 *      description: For Updating user's details
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/admin'
 *      responses:
 *          '201':
 *              description: users details updated Successfully,
 *          '500':
 *              description: users does not exist
 */

router.patch('/user',userAuth,userOp.updateUsersDetails)
module.exports = router
