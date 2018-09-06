const express = require('express');
const router = express.Router();
const studentModel = require('../models/student.model');

router.get('/', studentModel.getStudents);
router.post('/', studentModel.addStudent);
router.get('/:studentId', studentModel.getStudentById);

module.exports=router;