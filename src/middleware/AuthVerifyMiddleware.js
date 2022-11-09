

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const Token = req.headers['token-key'];
  jwt.verify(Token, "Secretkey123", (err, decoded) => {

    if (err) {
      res.status(401).json({ status: "unauthorized" });
    } else {
      //Get User Name From Decoded Token and Add With Req Header
      const username = decoded['data']['UserName'];
      req.headers.username = username;
      next(); 
    }

  })

}
