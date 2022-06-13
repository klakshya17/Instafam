const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../keys")
const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    res.status(401).json({ error: "You must be logged in" })
  }
  authorization.replace("Bearer ", "")
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return req.status(401).json({ error: "You must be logged in" })
    }
    const { _id } = payload.id
    User.findById(_id).then((userData) => {
      req.user = userdata
      next()
    })
  })
}
