const express = require("express");
const router = express.Router();
const { authenticated } = require("../middlewares/auth");
const { isAdmin } = require("../middlewares/checkRole");
const { uploadBook } = require("../middlewares/uploadBook");

const { getUsers } = require("../controllers/users");

const { register, login } = require("../controllers/auth");

const { getBooks, getBooksById, addBook } = require("../controllers/books");

// auth
router.post("/register", register);
router.post("/login", login);

// users
router.get("/users", authenticated, isAdmin, getUsers);

// books
router.get("/books", getBooks);
router.get("/book/:id", getBooksById);
router.post("/upload-book", uploadBook("thumbnail", "bookAttachment"), addBook);

module.exports = router;
