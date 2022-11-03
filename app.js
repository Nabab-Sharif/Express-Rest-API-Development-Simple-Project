
//Basic Library Import
const express = require("express");
const app = new express();
const router = require("./src/routes/api.route");
const bodyParser = require("body-parser");


//Security Middleware Library Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//Database Library Import
const mongoose = require("mongoose");



//Security Middleware Implement
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cors());


//Body Parser Implement
app.use(bodyParser.json())


//Request Rate Limit Implement
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);



//MongoDB Database Connection
const URI = "mongodb://127.0.0.1:27017/Todo";
const OPTION = { user: '', pass: '' };
mongoose.connect(URI, OPTION, (error) => {
  console.log("Connection Success");
  console.log(error);
})


//Routing Implement
app.use("/api/v1", router);


//Undefined Route Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
})



module.exports = app;