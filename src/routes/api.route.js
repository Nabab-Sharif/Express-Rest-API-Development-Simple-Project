
const express = require("express");
const router = express.Router();
const ProfileController = require("../controllers/ProfileController");
const TodoListController = require("../controllers/TodoListController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");


router.post("/CreateProfile", ProfileController.CreateProfile);
router.post("/UserLogin", ProfileController.UserLogin);
router.get("/SelectProfile", AuthVerifyMiddleware, ProfileController.SelectProfile);
router.post("/UpdateProfile", AuthVerifyMiddleware, ProfileController.UpdateProfile)

router.post("/CreateTodo", AuthVerifyMiddleware, TodoListController.CreateTodo);


module.exports = router;