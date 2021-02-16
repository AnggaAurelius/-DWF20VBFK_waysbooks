const express = require("express");
const router = express.Router();

const { getUsers } = require("../controllers/users");

const { register, login } = require("../controllers/auth");

// auth
router.post("/register", register);
router.post("/login", login);

// user
router.get("/users", getUsers);

module.exports = router;
