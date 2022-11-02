
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

