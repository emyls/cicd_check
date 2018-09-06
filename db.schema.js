const mongoose = require('mongoose');
const CONSTANTS = require('./constants');
const schema = mongoose.Schema;


// student schema
const studentSchema = new schema({
    studentId:{type:String, required:true},
    name:{type:String, required:true},
    itNumber:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String, required:true},
    phoneNo:{type:String, required:true},
    description:{
        year:{type:Number, required:true},
        semester:{type:Number, required:true},
        specializationArea:{type:String, required:true}
    }
});

const internshipSchema = new schema({
    internshipId: {type:String, required:true},
    startingDate:{type:Date, required:true},
    endDate:{type:Date, required:true},
    companyId:{type:String, required:true},
    supervisorId:{type:String, required:true},
    studentId:{type:String, required:true}
});


// Student form 1
const form1StudentSchema = new schema({
    internshipId:{type:String, required:true},
    studentId:{type:String, required:true},
    form1Id:{type:String, required:true},
    status:{
        studentSubmit:{type:Boolean, required:true},
        supervisorSubmit:{type:Boolean, required:true},
        approval:{type:Boolean, required:true}
    },
    studentName:{type:String, required:true},
    studentAddress:{type:String, required:true},
    studentPhone:{
        home:{type:String, required:true},
        mobile:{type:String, required:true},
    },
    email:{type:Array, required:true},
    semester:{type:Number, required:true},
    year:{type:Number, required:true},
    cgpa:{type:Number, required:true}
});


// Supervisor form 1
const form1SupervisorSchema = new schema({
    internshipId:{type:String, required:true},
    studentId:{type:String, required:true},
    form1Id:{type:String, required:true},
    status:{
        studentSubmit:{type:Boolean, required:true},
        supervisorSubmit:{type:Boolean, required:true},
        approval:{type:Boolean, required:true}
    },
    employeeName:{type:String, required:true},
    employeeAddress:{type:String, required:true},
    supervisorName:{type:String, required:true},
    supervisorPhone:{type:String, required:true},
    supervisorTitle:{type:String, required:true},
    supervisorEmail:{type:String, required:true},
    internshipStartDate:{type:Date, required:true},
    internshipEndDate:{type:Date, required:true},
    noOfHoursPerWeek:{type:Number, required:true},
    taskList:{type:String, required:true},
    extSupervisorName:{type:String, required:true},
    date:{type:Date, required:true}
});

mongoose.model('student', studentSchema, 'studentList');
mongoose.model('internship', internshipSchema, 'internshipList');
mongoose.model('form1Student', form1StudentSchema, 'form1ListStudent');
mongoose.model('form1Supervisor', form1SupervisorSchema, 'form1ListSupervisor');



// connect to database
mongoose.connect(CONSTANTS.dbURL, { useNewUrlParser: true }, (err)=>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('connected to database ' + CONSTANTS.DBName + ' ...');
});

module.exports=mongoose;
