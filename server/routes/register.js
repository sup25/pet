const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/User");

// POST /register
router.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if any of the fields are empty
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    console.log(existingUser);
    if (existingUser) {
      console.log(username);
      console.log(email);

      if (existingUser.username === username) {
        return res.status(400).json({ message: "Username already exists" });
      } else if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already exists" });
      } else {
        return "";
      }
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
