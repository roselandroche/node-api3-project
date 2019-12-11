// code away!
const express = require("express")

const welcomeRouter = require("./routers/welcome")
const usersRouter = require("./routers/users")
const postsRouter = require("./routers/posts")

const server = express()

server.use(express.json())
server.use("/", welcomeRouter)
server.use("/users", usersRouter)
server.use("/posts", postsRouter)

server.listen(8080, () => {
    console.log(` Server running on http://localhost:8080 `)
})