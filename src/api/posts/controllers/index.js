const savePost = require("./savePost");
const getPostCount = require("./getPostCount");
const getUserPosts = require("./getUserPosts");
const getAllPosts = require("./getAllPosts");
const getPostById = require("./getPostById");
const getAllPostCount = require("./getAllPostCount");
const updateVote = require("./updateVote");
const getPostByPopularity = require("./getPostByPopularity");
const deletePostById = require("./deletePostById");

module.exports = {
  savePost,
  getPostCount,
  getUserPosts,
  getAllPosts,
  getPostById,
  getAllPostCount,
  updateVote,
  getPostByPopularity,
  deletePostById,
};
