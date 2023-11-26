const express = require('express');
const { saveAnnouncement } = require('../../api/announcements/controllers');
const router = express.Router();

router.post("/announcements", saveAnnouncement);

module.exports = router;