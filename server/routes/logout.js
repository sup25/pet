const express = require("express");
const router = express.Router();

// POST /logout
router.post("/", (req, res) => {
  // clear JWT token stored in the client-side
  res.clearCookie("jwt");
  res.status(200).json({ message: "User logged out successfully" });
});

module.exports = router;
