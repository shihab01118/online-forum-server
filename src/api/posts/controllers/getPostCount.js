const Post = require("../../../models/Post");

const getPostCount = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const count = await Post.countDocuments({ email: userEmail });
    res.status(200).send({ count });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getPostCount;
