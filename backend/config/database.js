const  mongoose = require("mongoose");

mongoose.set('strictQuery' , false);

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URL).then((data)=>{
        console.log("Mongodb connected with server");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDatabase ;