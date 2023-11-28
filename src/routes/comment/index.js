const express = require("express");
const {
  postComment,
  getCommentsByTitle,
  deleteComment,
  getAllCommentsCount,
} = require("../../api/comment/controllers");
const router = express.Router();

router.get("/comments/count", getAllCommentsCount);
router.post("/comments", postComment);
router.get("/comments/:postTitle", getCommentsByTitle);
router.delete("/comments/:commentId", deleteComment);

module.exports = router;
