
var express = require("express");

var router = express.Router();

var homeRouter = require("./homeRouter");

var loginRouter = require("./loginRouter");

module.exports= function(app) {

    app.use("/login",loginRouter);

    app.use("/",homeRouter);

}

