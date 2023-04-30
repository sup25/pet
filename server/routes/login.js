const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const router = express.Router();
const User = require("../Models/User");

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // check if password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // generate JWT token and return it to the client
        const token = jwt.generateToken(user.id);
        return res.json({ token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
