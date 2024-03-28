const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const middleware = require("../middlewares/middleware");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/all", UserController.getAllUsers);
router.put(
  "/update/:id",
  middleware.authenticator,
  middleware.isAdmin,
  UserController.updateUser
);
router.delete(
  "/delete/:id",
  middleware.authenticator,
  middleware.isAdmin,
  UserController.deleteUser
);
router.get(
    '/search/:id',
    UserController.getAllById
)
router.get('/me', middleware.authenticator, UserController.getProfile)
router.get("/allDoctors", UserController.getAllDoctors);
module.exports = router;
