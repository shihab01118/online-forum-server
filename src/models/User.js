const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  badge: {
    type: String,
    default: "bronze",
  },
  role: String,
  transactionId: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
