const express = require('express');
const router = express.Router();
const Form1SupervisorModel = require('../models/form1Supervisor.model');

router.get('/:studentId', Form1SupervisorModel.getForm1SupervisorByStudentId);
router.get('/intership/:internshipId', Form1SupervisorModel.getForm1StudentByInternshipId);
router.post('/', Form1SupervisorModel.addform1Student);
router.put('/:form1Id', Form1SupervisorModel.updateForm1Student);


module.exports=router;