const User = require("../../../models/User");

const getCurrentUser = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const currentUser = await User.findOne({ email: userEmail });
    res.status(200).send(currentUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getCurrentUser;
