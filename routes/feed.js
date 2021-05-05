const express = require("express");

// Import Controllers
const feedController = require("../controllers/feed");

const router = express.router;

// GET /feed/posts
router.get("/posts", feedController.getPosts);

module.exports = router;
