const Post = require("../../../models/Post");

const savePost = async (req, res) => {
  try {
    const post = req.body;
    // console.log(post);
    const result = await Post.create(post);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = savePost;
