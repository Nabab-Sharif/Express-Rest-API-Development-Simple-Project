
const express=require("express");
const router=express.Router();
const ProfileController=require("../controllers/ProfileController");



router.post("/CreateProfile",ProfileController.CreateProfile);
router.post("/UserLogin",ProfileController.UserLogin);




module.exports=router;