const express = require("express");
const {
  savePost,
  getPostCount,
  getUserPosts,
  getAllPosts,
  getPostById,
} = require("../../api/posts/controllers");
const router = express.Router();

router.post("/posts", savePost);
router.get("/posts/count/:email", getPostCount);
router.get("/posts/:email", getUserPosts);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostById);

module.exports = router;
