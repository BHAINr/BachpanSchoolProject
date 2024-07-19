const express = require("express");
const helmet = require('helmet');
const app = express();

app.use(express.json());
app.use(helmet());

const form =  require("./routes/admissionformroute");


app.use("/api/v1", form);
app.use("/api/v1",require("./routes/admissionformroute"));


module.exports= app ;


