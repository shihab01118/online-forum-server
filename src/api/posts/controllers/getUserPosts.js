const Post = require("../../../models/Post");

const getUserPosts = async (req, res) => {
  try {
    const { email } = req.params;
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 5;
    // console.log(page, size, email);
    const userPosts = await Post.find({ email })
      .sort({ createdAt: -1 })
      .skip(page * size)
      .limit(size);
    res.status(200).send(userPosts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getUserPosts;
