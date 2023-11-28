const express = require("express");
const {
  saveReportedComment,
} = require("../../api/reportedComments/controllers");
const router = express.Router();

router.post("/reportedComments", saveReportedComment);

module.exports = router;
