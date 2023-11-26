const express = require("express");
const {
  saveAnnouncement,
  getAnnouncements,
} = require("../../api/announcements/controllers");
const router = express.Router();

router.post("/announcements", saveAnnouncement);
router.get("/announcements", getAnnouncements);

module.exports = router;
