const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 5000
const { MONGOURI } = require("./keys")

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDB")
})

require("./models/user")
require("./models/post")

app.use(express.json())
app.use(require("./routes/auth.js"))
app.use(require("./routes/post.js"))
app.use(require("./routes/user.js"))

const customMiddleware = (req, res, next) => {
  console.log("middleware executed!")
  next()
}

app.use(customMiddleware)

app.get("/", (req, res) => {
  console.log("home")
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT)
})
