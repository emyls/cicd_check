let schema = require('../db.schema');
let Form1SupervisorModel = schema.model('form1Supervisor');


// To get I-1 form supervisor part by using student ID
exports.getForm1SupervisorByStudentId = function (req,res) {
    let studentId = req.params.studentId;
    Form1SupervisorModel.find({studentId:studentId}).exec().then((data)=> {
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};


// To get I-1 form student part by using internship ID
exports.getForm1StudentByInternshipId = function (req,res) {
    let internshipId = req.params.internshipId;
    Form1SupervisorModel.find({internshipId:internshipId}).exec().then((data)=> {
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};


// To add I-1 form student part
exports.addform1Student = function (req, res) {

    let newForm1Supervisor = new Form1SupervisorModel({
        internshipId:req.body.internshipId,
        studentId:req.body.studentId,
        form1Id:req.body.form1Id,
        status:{
            studentSubmit:req.body.status.studentSubmit,
            supervisorSubmit:req.body.status.supervisorSubmit,
            approval:req.body.status.approval
        },
        employeeName:req.body.employeeName,
        employeeAddress:req.body.employeeAddress,
        supervisorName:req.body.supervisorName,
        supervisorPhone:req.body.supervisorPhone,
        supervisorTitle:req.body.supervisorTitle,
        supervisorEmail:req.body.supervisorEmail,
        internshipStartDate:req.body.internshipStartDate,
        internshipEndDate:req.body.internshipEndDate,
        noOfHoursPerWeek:req.body.noOfHoursPerWeek,
        taskList:req.body.taskList,
        extSupervisorName:req.body.extSupervisorName,
        date:req.body.date
    });
    newForm1Supervisor.save().then(()=>{
        res.status(201).json(newForm1Supervisor);
    }).catch((err)=>{
        res.send(req.body);
        console.log(err);
    });
};


// To update I-1 form student part
exports.updateForm1Student = function (req, res) {
    Form1SupervisorModel.update({form1Id:req.params.form1Id}, req.body).then((data)=> {
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};