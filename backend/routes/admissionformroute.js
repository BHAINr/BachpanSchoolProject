const express = require("express");
const router = express.Router();

const {getallformdetail} = require("../controllers/admissionform")

// Create Routes from here

//router.route("/admissionform").get(admissionform);

//router.get("/admissionform", admissionform)

router.get("/getfomedetail", (req,res)=>{
   res.status(200).json(getallformdetail)
   
})

module.exports = router ;