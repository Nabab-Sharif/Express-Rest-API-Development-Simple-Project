

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  const Token = req.headers['token-key'];
  jwt.verify(Token, "Secretkey123", (err, decoded) => {

    if (err) {
      res.status(401).json({ status: "unauthorized" });
    } else {
      next();
    }

  })

}
