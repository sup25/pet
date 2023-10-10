const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const authMiddleware = require("../utils/auth");

router.put("/", authMiddleware, async (req, res) => {
  const { userId, username, email, password } = req.body;

  try {
    // Ensure that the user making the request is the same as the one being updated
    if (req.user.id !== userId) {
      return res.status(403).json({ message: "Access forbidden" });
    }

    // Find the user by userId
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user properties if provided in the request
    if (username) user.username = username;
    if (email) user.email = email;
    if (password) user.password = password;

    // Save the updated user
    const updatedUser = await user.save();

    // Return the updated user as a response
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
