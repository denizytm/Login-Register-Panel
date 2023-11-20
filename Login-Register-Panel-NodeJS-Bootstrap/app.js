
const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
const ejsLayouts = require("express-ejs-layouts")
const bodyParser = require("body-parser")
const db = require("./app_server/models/db")

//MIDDLEWARE

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(ejsLayouts)
app.use(express.static(path.join(__dirname,"public")))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/app_server/views"))

//ROUTERs

const router = require("./app_server/routers/routeManager")

router(app)

app.listen("8000")

const user = require("./app_server/models/user")



