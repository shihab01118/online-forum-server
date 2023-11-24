const express = require("express");
const {
  createToken,
  clearCookie,
} = require("../../api/authentication/controllers");
const router = express.Router();

router.post("/jwt", createToken);

router.post("/logout", clearCookie);

module.exports = router;
