const mongoose = require("mongoose");
const { Schema } = mongoose;

const reportedCommentSchema = new Schema({
  commenterEmail: String,
  comment: String,
  reporterEmail: String,
  commentedPost: String,
  feedback: String,
  timeStamp: {
    default: Date.now,
    type: String,
  },
});

const ReportedComment = mongoose.model(
  "ReportedComment",
  reportedCommentSchema
);

module.exports = ReportedComment;
