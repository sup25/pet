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

    const postId = req.params.id;
    const updatedPostData = {
      title: req.body.title,
      content: req.body.content,
      type: req.body.type,
      image: req.body.image,
      author: userId,
    };

    // Find the post by its ID and the author's ID
    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId, author: userId },
      { $set: updatedPostData },
      { new: true }
    );

    if (!updatedPost) {
      return res
        .status(404)
        .json({ message: "Post not found or unauthorized." });
    }

    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
