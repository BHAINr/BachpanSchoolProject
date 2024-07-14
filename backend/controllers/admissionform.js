const admissionFM = require("../models/AdmissionFormModel");

//for admission from detail POST
exports.admissionFormDetails = async(req, res, next)=>{
    const form1 = await admissionFM.create(req.body);

    res.status(200).json({
        sucess:true,
        form1
    })
}

exports.getallformdetail = (req, res)=>{
    res.status(200).json({
        message:"HI"
    })
}