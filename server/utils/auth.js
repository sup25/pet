const jwt = require("./jwt");

// Middleware to protect routes that require authentication
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decodedToken = jwt.verifyToken(token);
    req.user = { id: decodedToken.userId }; // Attach the user object with the ID to req.user
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
