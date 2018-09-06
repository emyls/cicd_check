const express = require('express');
const routes = express.Router();

const studentroute = require('./controllers/student.controller');
const form1StudentRoute = require('./controllers/form1Student.controller');
const form1SupervisorRoute = require('./controllers/form1Supervisor.controller');
const internshipRoute = require('./controllers/internship.controller');

    routes.use('/student', studentroute);
    routes.use('/form1Student', form1StudentRoute);
    routes.use('/internship', internshipRoute);
    routes.use('/form1Supervisor', form1SupervisorRoute);


module.exports=routes;