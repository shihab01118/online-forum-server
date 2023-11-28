const express = require("express");
const { postComment } = require("../../api/comment/controllers");
const router = express.Router();

router.post("/comments", postComment);

module.exports = router;
