const User = require("../models/User");

const verifyAdmin = async (req, res, next) => {
  try {
    const decodedEmail = req?.user?.email;
    console.log(decodedEmail);
    const user = await User.findOne({ email: decodedEmail });
    if (!user || user.role !== "admin") {
      return res.status(403).send({ message: "forbidden access" });
    }
    next();
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = verifyAdmin;
