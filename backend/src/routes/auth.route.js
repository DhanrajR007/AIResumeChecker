const express = require("express");
const authController = require("../controllers/auth.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", authController.registerController);
router.post("/login", authController.loginController);
router.get("/logout", authController.logoutUserController);

router.get(
  "/get-me",
  AuthMiddleware.authMiddleware,
  authController.getMeController,
);

module.exports = router;
