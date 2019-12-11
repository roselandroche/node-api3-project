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

router.get("/", (req, res) => {
    users.insert()
})

module.exports = router