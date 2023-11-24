const express = require("express");
const { saveUserInfo } = require("../../api/users/controllers");
const router = express.Router();

router.put("/users/:email", saveUserInfo);

module.exports = router;
