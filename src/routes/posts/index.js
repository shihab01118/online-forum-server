const express = require("express");
const { savePost, getPostCount } = require("../../api/posts/controllers");
const router = express.Router();

router.post("/posts", savePost);
router.get("/posts/count/:email", getPostCount);

module.exports = router;
