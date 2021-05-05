const express = require("express");

// Import Controllers
const feedController = require("../controllers/feed");

const router = express.Router();

// GET /feed/posts
router.get("/posts", feedController.getPosts);

// POST /feed/posts
router.post("/posts", feedController.createPost);

module.exports = router;
