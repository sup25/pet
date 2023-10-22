const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const Post = require("../Models/Post");

// Update a post
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

    const postId = req.params.id; // Get the post ID from the URL

    // Find the post by its ID
    const post = await Post.findOne({ _id: postId, author: userId });

    if (!post) {
      return res.status(404).json({ message: "Post not found for this user." });
    }

    // Update the post with the data from the request body
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    post.type = req.body.type || post.type;
    post.image = req.body.image || post.image;

    // Save the updated post
    await post.save();

    res
      .status(200)
      .json({ message: "Post updated successfully", updatedPost: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
