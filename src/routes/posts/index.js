const express = require("express");
const {
  savePost,
  getPostCount,
  getUserPosts,
  getAllPosts,
  getPostById,
  updateVote,
  getPostByPopularity,
  deletePostById,
} = require("../../api/posts/controllers");
const verifyToken = require("../../middlewares/verifyToken");
const getAllPostCount = require("../../api/posts/controllers/getAllPostCount");
const router = express.Router();

router.get("/posts/count", getAllPostCount);
router.get("/posts/user/count/:email", getPostCount);
router.get("/posts/:email", verifyToken, getUserPosts);
router.get("/posts", getAllPosts);
router.get("/users/posts/:id", getPostById);
router.get("/posts/sort/popularity", getPostByPopularity);
router.post("/posts", savePost);
router.put("/posts/:postId/like", updateVote);
router.delete("/posts/:postId", deletePostById);

module.exports = router;
