const express = require('express');
const router = express.Router();
const adminOp = require('../controllers/admin.controller');
const adminRegistrationModel = require('../models/adminRegistrationSchema.js');

router.post('/adminLogin',adminOp.adminLogin)
router.post('/admin',adminOp.adminRegistration )
router.get('/admin',adminOp.adminList)

module.exports = router;