const express = require("express");
const router = express.Router();
const User = require("../Models/User"); // Import your User model

// Define a route to handle updates
router.post("/", async (req, res) => {
  const { userId, username, email, password } = req.body;

  try {
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
