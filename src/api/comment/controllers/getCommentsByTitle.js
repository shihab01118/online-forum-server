const Comment = require("../../../models/Comment");

const getCommentsByTitle = async (req, res) => {
  try {
    const postTitle = req.params.postTitle;
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 5;
    // console.log(page, size, postTitle);
    const commentsForPosts = await Comment.find({ commentedPost: postTitle })
      .skip(page * size)
      .limit(size);
    res.status(200).send(commentsForPosts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getCommentsByTitle;
