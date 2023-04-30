const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const User = require("../Models/User");

const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user with given username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Hash password and create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword,
        });

        await user.save();

        // Generate JWT token and send back to client
        const token = jwt.sign({ username }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = register;
