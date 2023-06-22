const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();



app.listen(5000 || process.env.PORT , ()=>{
    console.log("Server running");
})

