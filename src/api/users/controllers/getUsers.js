const User = require("../../../models/User");

const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 5;
    // console.log(page, size);
    const users = await User.find()
      .skip(page * size)
      .limit(size);
    // console.log(users);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getUsers;
