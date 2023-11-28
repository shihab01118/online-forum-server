const express = require("express");
const {
  postComment,
  getCommentsByTitle,
} = require("../../api/comment/controllers");
const router = express.Router();

router.post("/comments", postComment);
router.get("/comments/:postTitle", getCommentsByTitle);

module.exports = router;
