const express = require("express");
const router = express.Router();

const {getallformdetail, admissionFormDetails} = require("../controllers/admissionform");
const { videoImageFomecontroller, getvideoimagecontroller, getvideoimagecontrollerYearWise } = require("../controllers/videoImageController");

// Create Routes from here

//router.route("/admissionform").get(admissionform);

//router.get("/admissionform", admissionform)

router.get("/getfomedetail", (req,res)=>{
   res.status(200).json(getallformdetail)
   
})
//Fome Route
router.route("/afd/new").post(admissionFormDetails);

//video Image uploaded routes
router.route("/video/upload").post(videoImageFomecontroller);
router.route("/VI/get").get(getvideoimagecontroller);
router.route("/sort/vidata/:year").get(getvideoimagecontrollerYearWise);

module.exports = router ;



