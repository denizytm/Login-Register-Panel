
var express = require("express");

var router = express.Router();

var loginController = require("../controllers/loginController");

router.get("/",loginController.indexGet);

router.post("/",loginController.indexPost);

router.get("/signup",loginController.signupGet);

router.post("/signup",loginController.userlist);

router.get("/kullanicisil/:value",loginController.deleteUser);

module.exports = router;

