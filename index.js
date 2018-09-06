const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./routes');
const CONSTANTS = require('./constants');
const app = express();


// used to fix CORS Authentication problems
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// used to convert data into a JSON format
app.use(bodyparser.json());

// used to route REST APIs
app.use('/', routes);

// Server
app.listen(CONSTANTS.serverPORT, err=>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('\nconnected to server http://localhost:' + CONSTANTS.serverPORT + ' ...');
});
