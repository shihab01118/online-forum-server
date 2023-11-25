const express = require("express");
const {
  savePost,
  getPostCount,
  getUserPosts,
} = require("../../api/posts/controllers");
const router = express.Router();

router.post("/posts", savePost);
router.get("/posts/count/:email", getPostCount);
router.get("/posts/:email", getUserPosts);

module.exports = router;
