const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.authenticateToken=function (req, res, next) {
  const authHeader = req.headers['authorization']
  

  if (authHeader == null) return res.sendStatus(401)
  const token = authHeader.split(' ')[1]
  jwt.verify(token, process.env.JWT_KEY , (err,user) => {
    if (err) {
      return res.sendStatus(403)
    }
    req.user = user

    next()
  })
}
