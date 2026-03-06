const mongoose = require("mongoose");

const blackListTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token is required"],
    },
  },
  {
    timestamps: true,
  },
);

const blackListToken = mongoose.model("blackListToken", blackListTokenSchema);

module.exports = blackListToken;
