const Comment = require("../../../models/Comment");

const postComment = async (req, res) => {
  try {
    const comment = req.body;
    const result = await Comment.create(comment);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = postComment;
