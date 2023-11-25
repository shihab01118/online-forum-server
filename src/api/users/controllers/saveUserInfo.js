const User = require("../../../models/User");

const saveUserInfo = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const userData = req.body;
    console.log(userData);

    const query = { email: userEmail };
    const existingUser = await User.findOne(query);

    if (existingUser) {
      return res.status(200).send("User already exists");
    }

    const updatedUser = await User.findOneAndUpdate(query, userData, {
      new: true,
      upsert: true,
    });

    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = saveUserInfo;
