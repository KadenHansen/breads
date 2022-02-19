const express = require("express")
const breads = express.Router()
const Bread = require("../models/bread.js")
// const error404 = require("../views/error404.jsx")


//Index
breads.get("/", (req, res) => {
    res.render("index", 
        {
            breads: Bread,
        }
    )
})


breads.post("/", (req, res) => {
    if(!req.body.image) {
        req.body.image = "/images/bread.jfif"
    }
    if(req.body.hasGluten === "on") {
        req.body.hasGluten === "true"
    } else {
        req.body.hasGluten === "false"
    }
    Bread.push(req.body)
    res.redirect("/bread")
})


breads.get("/new", (req, res) => {
    res.render("new")
})

breads.get("/:arrayIndex/edit", (req, res) => {
        res.render("edit", {
            bread: Bread[req.params.arrayIndex],
            index: req.params.arrayIndex
        })
})

breads.put("/:arrayIndex", (req, res) => {
    if(req.body.hasGluten === "on") {
        req.body.hasGluten === "true"
    } else {
        req.body.hasGluten === "false"
    }
    Bread[req.params.arrayIndex] = req.body
    res.redirect(`/bread/${req.params.arrayIndex}`)
})


//Show
breads.get("/:arrayIndex", (req, res) => {
    if(Bread[req.params.arrayIndex]) {
        res.render("show", {
            bread: Bread[req.params.arrayIndex],
            index: req.params.arrayIndex
        })
    } else {
        res.render("error404")
    }
})

breads.delete("/:arrayIndex", (req, res) => {
    Bread.splice(req.params.arrayIndex, 1)
    res.redirect("/bread")
})

module.exports = breads