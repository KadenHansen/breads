const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("Bread CRUD")
})

//breads
const breadsController = require("./controllers/breads_controller.js")
app.use("/breads", breadsController)

app.listen(PORT)