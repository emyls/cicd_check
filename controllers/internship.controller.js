const express = require('express');
const router = express.Router();
const internshipModel = require('../models/internship.model');

router.get('/studentId', internshipModel.getInternshipByStudentId);
router.post('/', internshipModel.addInternship);


module.exports=router;