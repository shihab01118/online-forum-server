const Comment = require("../../../models/Comment");
const ReportedComment = require("../../../models/ReportedComment");

const deleteComment = async (req, res) => {
  try {
    
    // await Comment.findOneAndDelete({ _id: commentId });
    // const result = await ReportedComment.findOneAndDelete({_id: reportedCommentId});
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = deleteComment;
