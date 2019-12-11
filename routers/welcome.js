const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Node Project 3" })
})

module.exports = router