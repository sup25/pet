const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_REFRESH_SECRET } = process.env;

// generate a JWT token for a given user ID
const generateToken = (userId) => {
  const accessToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: 120 });
  const refreshToken = jwt.sign({ userId }, JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
};

// verify a JWT token and return the decoded payload
const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

// verify a refresh token and return the decoded payload
const verifyRefreshToken = (refreshToken) => {
  return jwt.verify(refreshToken, JWT_REFRESH_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
  verifyRefreshToken,
};
