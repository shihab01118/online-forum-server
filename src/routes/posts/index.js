const express = require('express');
const { savePost } = require('../../api/posts/controllers');
const router = express.Router();

router.post("/posts", savePost)

module.exports = router;