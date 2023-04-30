const jwt = require("./jwt");

// middleware to protect routes that require authentication
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decodedToken = jwt.verifyToken(token);
        req.userId = decodedToken.userId;
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = {
    authMiddleware,
};
