const express = require("express");
const {
  saveReportedComment,
  getAllReportedComments,
} = require("../../api/reportedComments/controllers");
const router = express.Router();

router.post("/reportedComments", saveReportedComment);
router.get("/reportedComments", getAllReportedComments);

module.exports = router;
