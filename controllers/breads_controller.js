const express = require("express")
const bread = express.Router()

//Index
bread.get("/", (req, res) => {
    // res.render("index")
    res.send("Breads Page")
})

//Show
bread.get("/:arrayIndex", (req, res) => {
    res.send(req.params.arrayIndex)
})

module.exports = bread