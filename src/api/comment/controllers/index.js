const postComment = require("./postComment");
const getCommentsByTitle = require("./getCommentsByTitle");
const deleteComment = require("./deleteComment");
const getAllCommentsCount = require("./getAllCommentsCount");

module.exports = {
  postComment,
  getCommentsByTitle,
  deleteComment,
  getAllCommentsCount,
};
