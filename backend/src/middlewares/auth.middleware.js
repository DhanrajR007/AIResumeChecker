const jwt = require("jsonwebtoken");
const blackListToken = require("../model/blacklistToken.model");



async function authMiddleware(req, res, next) {
  const token = req.cookies.token || req.headers["authorization"]?.split(" ")[1];
  console.log("Token from middleware:", token);
  if (!token) {
    return res.status(401).json({
      message:
        "Unauthorized access, token is missing, please login to get a token",
    });
  }
  const isBlackListed = await blackListToken.findOne({ token });
  if (isBlackListed) {
    return res.status(401).json({
      message:
        "Unauthorized access, token is blacklisted, please login to get a new token",
    });
  }
  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized access, invalid token",
    });
  }
}


module.exports = {authMiddleware}