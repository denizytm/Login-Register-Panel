
var mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0/NodeProject").then(()=>console.log("connected to db")).catch((e)=>console.log(e))

