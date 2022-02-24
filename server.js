//Dependencies
const express = require("express")
const app = express()
const methodOverride = require("method-override")
const mongoose = require("mongoose")

//Configurations
require("dotenv").config()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(express.json())

//breads
const breadsController = require("./controllers/breads_controller.js")
app.use("/bread", breadsController)

//Routes
app.get("/", (req, res) => {
    res.redirect("/bread")
})

app.get("*", (req, res) => {
    res.render("error404")
})

//DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("DB Connected"))
.catch(err => console.log(err))


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening on port ${PORT}`))