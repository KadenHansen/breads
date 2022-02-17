const express = require("express")
const breads = express.Router()
const Bread = require("../models/bread.js")


//Index
breads.get("/", (req, res) => {
    res.render("index", 
        {
            breads: Bread
        }
    )
})

//Show
breads.get("/:arrayIndex", (req, res) => {
    res.render("show", {
        bread: Bread[req.params.arrayIndex]
    })
})

module.exports = breads