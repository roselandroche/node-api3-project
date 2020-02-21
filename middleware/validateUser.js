const users = require("../users/userDb")

function validateUserId() {
    return (req, res, next) => {
        users.getById(req.params.id)
            .then(user => {
                if(user) {
                    req.user = user
                    next()
                } else {
                    res.status(400).json({ message: `Invalid User ID.`})
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: `Error retrieving user.`})
            })
    }
}

function validateUser() {
    return (req, res, next) => {
        if(!req.body) {
            res.status(400).json({ message: "Missing required name field."})
        }
        next()
    }
}

module.exports = {
    validateUserId,
    validateUser
}