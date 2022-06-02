const express = require("express");
const router = express.Router();
const userOp = require('../controllers/user.controller')

router.post('/login',userOp.userLogin)
router.post('/register',userOp.userRegistration)
router.get('/register',userOp.userList);

module.exports = router