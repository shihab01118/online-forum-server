const express = require("express");
const {
  savePost,
  getPostCount,
  getUserPosts,
  getAllPosts,
} = require("../../api/posts/controllers");
const router = express.Router();

router.post("/posts", savePost);
router.get("/posts/count/:email", getPostCount);
router.get("/posts/:email", getUserPosts);
router.get("/posts", getAllPosts);


module.exports = router;
