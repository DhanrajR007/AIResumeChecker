const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../model/user.model");

/**
 * @name registerController
 * @description register a new user, expects username, email and password in the request body
 * @access Public
 */

async function registerController(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const isUserExists = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserExists) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }
    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({ username, email, password: hash });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * @name loginUserController
 * @description login a user, expects email and password in the request body
 * @access Public
 */

async function loginController(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found with the provided credentials" });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      return res
        .status(400)
        .json({ message: "User not found with the provided credentials" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("token", token);

    res.status(200).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  registerController,
  loginController
};
