const express = require("express")
const users = require("../users/userDb")
const { validateUserId, validateUser } = require("../middleware/validateUser")

const router = express.Router()

router.get("/", (req, res) => {
    users.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ message: `Resources were not found.`})
        })
})

router.get("/:id", validateUserId(), (req, res) => {
    res.json(req.user)
})

router.post("/", (req, res) => {
    users.insert(req.body)
        .then(newPost => {
            res.status(201).json(newPost)
        })
        .catch(err => {
            console.log(err)
        })
})

router.put("/:id", (req, res) => {
    users.update(req.params.id, req.body)
        .then(data => {
            res.status(200).json({ message: "Sucessful update" })
        })
        .catch(err => {
            console.log(err)
        })
})

router.delete("/:id", (req, res) => {
    users.remove(req.params.id)
        .then(data => {
            res.status(204).json({ message: "Successfully deleted" })
        }) 
})

module.exports = router