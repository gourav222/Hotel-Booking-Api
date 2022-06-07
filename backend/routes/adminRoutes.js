
const express = require('express');
const router = express.Router();
const adminOp = require('../controllers/admin.controller');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
/**
 * @swagger
 *  components:
 *      schema:
 *          admin:
 *              type : object
 *              properties:
 *                  Name: 
 *                      type: string
 *                  email:
 *                      type: string
 *                  contact:
 *                      type: integer
 *                  password:
 *                      type: string     
 *                  
 */

/**
 * @swagger
 * /admins:
 *  get:
 *    summary: To get list of all registered admins.
 *    description: This api is used to fetch the data from mongodb. 
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
router.get('/admins',adminOp.adminList)
/**
 * @swagger
 * /adminLogin:
 *  post:
 *      summary: Admin login
 *      description: For admin login
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
router.post('/adminLogin',adminOp.adminLogin)
/**
 * @swagger
 * /adminRegister:
 *  post:
 *      summary: To add a new admin
 *      description: This is used to add the admin details to the database
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
router.post('/adminRegister',adminOp.adminRegistration )

module.exports = router;