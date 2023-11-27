const Post = require("../../../models/Post");

const getAllPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 5;
    // console.log(page, size);
    
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(page * size)
      .limit(size);
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAllPosts;
