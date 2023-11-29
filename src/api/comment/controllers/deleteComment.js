const Comment = require("../../../models/Comment");
const ReportedComment = require("../../../models/ReportedComment");

const deleteComment = async (req, res) => {
  try {
    const { commentId, reportedCommentId } = req.query;
    const commentDeletionResult = await Comment.deleteOne({
      _id: commentId,
    });
    const reportedCommentDeletionResult =
      await ReportedComment.deleteOne({
        _id: reportedCommentId,
      });
    res.status(200).send(reportedCommentDeletionResult);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = deleteComment;
