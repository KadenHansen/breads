const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("Bread CRUD")
})

app.listen(PORT)