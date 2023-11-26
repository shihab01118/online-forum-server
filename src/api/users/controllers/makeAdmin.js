const User = require("../../../models/User");

const makeAdmin = async (req, res) => {
  try {
    const userId = req.params.id;
    const filter = { _id: userId };
    const update = { role: "admin" };
    const updatedUser = await User.updateOne(filter, update);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = makeAdmin;
