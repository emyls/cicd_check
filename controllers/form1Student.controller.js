const express = require('express');
const router = express.Router();
const Form1StudentModel = require('../models/form1Student.model');

router.get('/:studentId', Form1StudentModel.getForm1StudentByStudentId);
router.get('/intership/:internshipId', Form1StudentModel.getForm1StudentByInternshipId);
router.post('/', Form1StudentModel.addform1Student);
router.put('/:form1Id', Form1StudentModel.updateForm1Student);


module.exports=router;