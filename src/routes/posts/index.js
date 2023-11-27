const express = require("express");
const {
  savePost,
  getPostCount,
  getUserPosts,
  getAllPosts,
  getPostById,
} = require("../../api/posts/controllers");
const verifyToken = require("../../middlewares/verifyToken");
const getAllPostCount = require("../../api/posts/controllers/getAllPostCount");
const router = express.Router();

router.post("/posts", savePost);
router.get("/posts/count", getAllPostCount);
router.get("/posts/user/count/:email", getPostCount);
router.get("/posts/:email", verifyToken, getUserPosts);
router.get("/posts", getAllPosts);
router.get("/users/posts/:id", getPostById);

module.exports = router;
