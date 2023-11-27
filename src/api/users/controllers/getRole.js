const User = require("../../../models/User");

const getRole = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const decodedEmail = req.user.email;

    if (userEmail !== decodedEmail) {
      return res.status(403).send({ message: "forbidden user" });
    }

    // Find user by email using Mongoose
    const user = await User.findOne({ email: userEmail });

    let admin = false;
    if (user) {
      admin = user?.role === "admin";
    }

    res.status(200).send({ admin });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getRole;
