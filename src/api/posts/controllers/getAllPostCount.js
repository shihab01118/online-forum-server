const Post = require("../../../models/Post");

const getAllPostCount = async (req, res) => {
  try {
    const count = await Post.countDocuments();
    res.status(200).send({ count });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAllPostCount;
