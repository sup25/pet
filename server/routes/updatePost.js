const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const Post = require("../Models/Post");

router.put("/:id", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find all posts by the user
    const userPosts = await Post.find({ author: userId });

    if (userPosts.length === 0) {
      return res.status(404).json({ message: "No posts found for this user." });
    }

    // Update each post with the data from the request body
    for (const post of userPosts) {
      if (req.body.title) {
        post.title = req.body.title;
      }
      if (req.body.content) {
        post.content = req.body.content;
      }
      if (req.body.type) {
        post.type = req.body.type;
      }
      if (req.body.image) {
        post.image = req.body.image;
      }

      // Save the updated post
      await post.save();
    }

    res.status(200).json({ message: "User's posts updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
