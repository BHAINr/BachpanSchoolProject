const vif = require("../models/videoImageFome");

// Function use to send video data
exports.videoImageFomecontroller = async (req, res, next) => {
    try {
        const vifc = await vif.create(req.body);

        res.status(200).json({
            sucess: true,
            vifc
        })
    } catch (error) {
        alert("video iMage fome data not send");
    }
}

// get uploaded image and videos

exports.getvideoimagecontroller = async(req,res,next)=>{
    try {
        const gvic = await vif.find();
        res.status(201).json({
            sucess:true,
            gvic
        })
    } catch (error) {
        
    }
}