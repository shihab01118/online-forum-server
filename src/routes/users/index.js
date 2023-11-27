const express = require("express");
const {
  saveUserInfo,
  getUsers,
  makeAdmin,
  getRole,
  getCurrentUser,
} = require("../../api/users/controllers");
const verifyToken = require("../../middlewares/verifyToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const router = express.Router();

router.get("/users", verifyToken, verifyAdmin, getUsers);
router.get("/users/:email", verifyToken, getCurrentUser);
router.get("/users/role/:email", verifyToken, getRole);
router.put("/users/:email", saveUserInfo);
router.patch("/users/admin/:id", verifyToken, verifyAdmin, makeAdmin);

module.exports = router;
