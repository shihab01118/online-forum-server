const User = require("../../../models/User");

const getAllUsersCount = async (req, res) => {
    try {
        const count = await User.countDocuments();
        res.status(200).send({ count });
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
}

module.exports = getAllUsersCount;