
const jwtSecret = '2a5bb92fa44b6fad7bfc55200ae27a36237250ca08daae06183a2201a42dde99fc8cb2';

exports.adminAuth = (req, res, next) => {
  const jwt = require('jsonwebtoken')
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" })
      } else {
        if (decodedToken.role !== "admin") {
          return res.status(401).json({ message: "Not authorized" })
        } else {
          next()
        }
      }
    })
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" })
  }
}