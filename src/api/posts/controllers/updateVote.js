const Post = require("../../../models/Post");

const updateVote = async (req, res) => {
  try {
    const postId = req.params.postId;
    const action = req.body.action;

    let updateField;
    if (action === "like") {
      updateField = { $inc: { upVote: 1 } };
    } else if (action === "dislike") {
      updateField = { $inc: { downVote: 1 } };
    } else {
      res.status(400).send({ message: "invalid action" });
    }

    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      updateField,
      { new: true }
    );

    res.status(200).send(updatedPost);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = updateVote;
