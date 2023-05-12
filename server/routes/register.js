const express = require("express");
const router = express.Router();
const jwt = require("../utils/jwt");
const User = require("../Models/User");

// POST /register
router.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ message: "Username already exists" });
      } else {
        return res.status(400).json({ message: "Email already exists" });
      }
    }

    // create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    // Generate JWT token and send back to client
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    res.status(201).json({ message: "User created successfully", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
