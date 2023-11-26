const express = require("express");
const {
  saveUserInfo,
  getUsers,
  makeAdmin,
} = require("../../api/users/controllers");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.put("/users/:email", saveUserInfo);
router.get("/users", verifyToken, getUsers);
router.patch("/users/admin/:id", makeAdmin);

module.exports = router;
