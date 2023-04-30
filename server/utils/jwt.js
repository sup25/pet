const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

// generate a JWT token for a given user ID
const generateToken = (userId) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
};

// verify a JWT token and return the decoded payload
const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};

module.exports = {
    generateToken,
    verifyToken,
};
