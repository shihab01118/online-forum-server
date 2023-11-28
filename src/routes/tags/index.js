const express = require("express");
const { getTags, setTag } = require("../../api/tags/controllers");
const router = express.Router();

router.get("/tags", getTags);
router.post("/tags", setTag);

module.exports = router;