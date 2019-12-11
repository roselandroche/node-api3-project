const express = require("express")
const posts = require("../posts/postDb")

const router = express.Router()

router.get("/", (req, res) => {
    posts.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ message: `Resources were not found.`})
        })
})

module.exports = router