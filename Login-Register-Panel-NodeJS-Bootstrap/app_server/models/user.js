
var {Schema , default : mongoose} = require("mongoose");

module.exports = mongoose.model("User",new Schema({

    name : String,
    lastname: String,
    email : String,
    username : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    }

}))

