//Dependencies
const express = require("express")
const app = express()

//Configurations
require("dotenv").config()
const PORT = process.env.PORT

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static("public"))

//breads
const breadsController = require("./controllers/breads_controller.js")
app.use("/bread", breadsController)

//Routes
app.get("/", (req, res) => {
    res.render("index")
})

app.get("*", (req, res) => {
    res.render("error404")
})

app.listen(PORT)