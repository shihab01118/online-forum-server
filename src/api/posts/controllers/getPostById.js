const Post = require("../../../models/Post");

const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const filter = { _id: postId };
    const post = await Post.findOne(filter);
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getPostById;
