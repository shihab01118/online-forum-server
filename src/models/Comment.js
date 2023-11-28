const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  commenterEmail: String,
  comment: String,
  commentedPost: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
