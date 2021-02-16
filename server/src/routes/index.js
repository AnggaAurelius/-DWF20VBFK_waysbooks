const express = require("express");
const router = express.Router();
const { authenticated } = require("../middlewares/auth");
const { isAdmin } = require("../middlewares/checkRole");

const { getUsers } = require("../controllers/users");

const { register, login } = require("../controllers/auth");

// auth
router.post("/register", register);
router.post("/login", login);

// user
router.get("/users", authenticated, isAdmin, getUsers);

module.exports = router;
