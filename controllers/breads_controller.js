const express = require("express")
const breads = express.Router()
const Bread = require("../models/bread.js")
// const error404 = require("../views/error404.jsx")

//GET
//Index
breads.get("/", async (req, res) => {
    Bread.find()
        .then(foundBreads => {
            res.render("index", 
                {
                    breads: foundBreads
                }
            )
        }).catch(e => console.log("hi")) 
})

//New Bread
breads.get("/new", (req, res) => {
    res.render("new")
})

//Edit Bread
breads.get("/:id/edit", (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render("edit", {
                bread: foundBread
            })
        })
        // res.render("edit", {
        //     bread: Bread[req.params.id],
        //     index: req.params.id
        // })
})

//Show
breads.get("/:id", (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render("show", {
                bread: foundBread
            })
        })
})

//POST
breads.post("/", (req, res) => {
    if(!req.body.image) {
        req.body.image = undefined
    }
    if(req.body.hasGluten === "on") {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect("/bread")
})

breads.put("/:id", (req, res) => {
    if(req.body.hasGluten === "on") {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBread => {
            res.redirect(`/bread/${req.params.id}`)
        })
})

breads.delete("/:id", (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
        .then(deletedbread => {
            res.status(303).redirect("/bread")
        })
})

module.exports = breads