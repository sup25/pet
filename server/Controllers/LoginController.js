const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const User = require("../Models/User");

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user with given username exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Check if password is correct
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token and send back to client
        const token = jwt.sign({ username }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = login;
