let schema = require('../db.schema');
let internshipModel = schema.model('internship');

let epochTime = new Date().getTime();


exports.addInternship = function(req, res) {
    let newInternship = new internshipModel({
        internshipId: "intrn" + epochTime,
        startingDate:req.body.startingDate,
        endDate:req.body.endDate,
        companyId:req.body.companyId,
        supervisorId:req.body.supervisorId,
        studentId:req.body.studentId
    });
};

exports.getInternshipByStudentId = function (req,res) {
    let studentId = req.params.studentId;
    internshipModel.find({studentId:studentId}).exec().then((data)=> {
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
};