
const ProfileModel = require("../models/ProfileModel");

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