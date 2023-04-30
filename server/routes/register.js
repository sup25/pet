const express = require("express");
const router = express.Router();
const User = require('../Models/User')


// POST /register
router.post("/", async (req, res) => {
    const { username, email, password } = req.body;

    try {
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

        return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
