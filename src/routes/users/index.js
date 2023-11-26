const express = require("express");
const { saveUserInfo, getUsers } = require("../../api/users/controllers");
const router = express.Router();

router.put("/users/:email", saveUserInfo);
router.get("/users", getUsers);

module.exports = router;
