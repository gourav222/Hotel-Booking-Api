const express = require("express");
const router = express.Router();
const userOp = require('../controllers/user.controller')

/**
 * @swagger
 *  components:
 *      schema:
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
 *      summary: User login
 *      description: For user login
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/user'
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
 *      summary: To add a user
 *      description: This is used to add the user details to the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/admin'
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
 *    summary: To get list of all registered users.
 *    description: This api is used to fetch the data from mongodb
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *            application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#components/schema/admin'
 */
router.get('/users',userOp.userList);


module.exports = router