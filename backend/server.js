const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

dotenv.config({path:"backend/config/config.env"});
//database connect 
console.log("DB_URL:", process.env.DB_URI);
console.log("PORT:", process.env.PORT);

connectDatabase();

app.listen(process.env.PORT, ()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})