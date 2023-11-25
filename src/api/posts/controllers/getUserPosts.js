const Post = require("../../../models/Post");

const getUserPosts = async (req, res) => {
  const { email } = req.params;
  try {
    const userPosts = await Post.find({ email });
    res.status(200).send(userPosts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getUserPosts;