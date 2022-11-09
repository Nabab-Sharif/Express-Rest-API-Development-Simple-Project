
const ProfileModel = require("../models/ProfileModel");
const jwt = require('jsonwebtoken');



exports.CreateProfile = (req, res) => {

  const reqBody = req.body;
  ProfileModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  })

}


exports.UserLogin = (req, res) => {
  const UserName = req.body["UserName"];
  const Password = req.body["Password"];

  ProfileModel.find({ UserName: UserName, Password: Password }, (err, data) => {

    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {

      if (data.length > 0) {

        //Create Auth Token
        const Payload = {
          exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
          data: data[0]
        }
        const token = jwt.sign(Payload, 'Secretkey123');
        res.status(200).json({ status: "success", token: token, data: data[0] })

      } else {
        res.status(401).json({ status: "unauthorized" });
      }
    }


  })
}

exports.SelectProfile = (req, res) => {
  const UserName = req.headers['username'];

  ProfileModel.find({ UserName: UserName }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  })
}

exports.UpdateProfile = (req, res) => {
  const UserName = req.headers['username'];
  const reqBody = req.body;

  ProfileModel.updateOne({ UserName: UserName }, { $set: reqBody }, { upsert: true }, (error, data) => {
    if (error) {
      res.status(400).json({ status: "fail", data: error });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  })
}

