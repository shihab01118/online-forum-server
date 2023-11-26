const Post = require("../../../models/Post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAllPosts;
