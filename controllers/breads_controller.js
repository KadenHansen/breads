const express = require("express")
const breads = express.Router()

breads.get("/", (req, res) => {
    res.send("Breads Page")
})

module.exports = breads