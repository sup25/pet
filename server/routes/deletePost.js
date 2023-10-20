const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const Post = require("../Models/Post");

router.delete("/:postId", async (req, res) => {
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

    const postId = req.params.postId;

    // Check if the post exists and belongs to the user
    const post = await Post.findOne({ _id: postId, author: userId });
    if (!post) {
      return res.status(404).json({ message: "Post not found " });
    }

    // Delete the post
    await Post.findByIdAndDelete(postId);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
