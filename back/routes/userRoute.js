const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const middleware = require("../middleware/middleware");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get(
  "/all",
  middleware.authenticator,
  middleware.isAdmin,
  UserController.getAllUsers
);
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
  "/search/:id",
  middleware.authenticator,
  middleware.isAdmin,
  UserController.getAllById
);

module.exports = router;
