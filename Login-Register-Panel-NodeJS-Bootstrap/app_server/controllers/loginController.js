
var user = require("..//models/user");

var path = require("path");

async function getItems(){

    let UserInfo = await user.find({});
    return UserInfo;
  
  }

module.exports.indexGet = function(req,res) {

res.render("login");

}

module.exports.indexPost = function(req,res) {

        console.log(req.body);

        username = req.body.username,    
        password = req.body.password;

        res.render("login",{

            "username" : username,
    
            "password" : password,
    
        });

}

module.exports.signupGet = function(req,res) {

    res.render("signup");

}

module.exports.signupPost = function(req,res) {

    console.log(req.body);

    var NewUser = new user({

        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,

    })

    NewUser.save();

    res.render("login",{
        user:NewUser,
    })

}

var UserList = new Array();

module.exports.userlist = function(req,res) {

    var NewUser = new user({

        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,

    })

    NewUser.save();

    getItems().then(function(FoundItems){

        console.log(FoundItems);

        UserList = FoundItems;

        res.render("users",{
            users:UserList
        })

    })  

}

module.exports.deleteUser = function(req,res) {
    
        console.log(req.params.value);

        getItems().then(function(FoundItems) {
            user.deleteOne({ name: req.params.value} ).then(function() {
                console.log("Data deleted");
                return getItems();
            }).then(function(updatedItems) {
                UserList = updatedItems;
    
                res.render("users", {
                    users: UserList
                });
            }).catch(function(error) {
                console.log(error);
            });
        });

}
