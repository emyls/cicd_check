let schema = require('../db.schema');
let Form1StudentModel = schema.model('form1Student');

let epochTime = new Date().getTime();

// To get I-1 form student part by using student ID
exports.getForm1StudentByStudentId = function (req,res) {
    let studentId = req.params.studentId;
    Form1StudentModel.find({studentId:studentId}).exec().then((data)=> {
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};


// To get I-1 form student part by using internship ID
exports.getForm1StudentByInternshipId = function (req,res) {
    let internshipId = req.params.internshipId;
    Form1StudentModel.find({internshipId:internshipId}).exec().then((data)=> {
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};


// To add I-1 form student part
exports.addform1Student = function (req, res) {

    let newForm1Student = new Form1StudentModel({
        internshipId:req.body.internshipId,
        studentId:req.body.studentId,
        form1Id: "form1" + epochTime,
        status:{
            studentSubmit:req.body.status.studentSubmit,
            supervisorSubmit:req.body.status.supervisorSubmit,
            approval:req.body.status.approval
        },
        studentName:req.body.studentName,
        studentAddress:req.body.studentAddress,
        studentPhone:{
            home:req.body.studentPhone.home,
            mobile:req.body.studentPhone.mobile,
        },
        email:req.body.email,
        semester:req.body.semester,
        year:req.body.year,
        cgpa:req.body.cgpa
    });
    newForm1Student.save().then(()=>{
        res.status(201).json(newForm1Student);
    }).catch((err)=>{
        res.send(req.body);
        console.log(err);
    });
};


// To update I-1 form student part
exports.updateForm1Student = function (req, res) {
    Form1StudentModel.update({form1Id:req.params.form1Id}, req.body).then((data)=> {
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};