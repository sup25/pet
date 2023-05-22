const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../Models/User");
const authMiddleware = require("../utils/auth");

// Set up multer storage and file filtering
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    // Generate a unique filename by appending a timestamp
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, uniqueSuffix + "." + extension);
  },
});

// File filter to allow only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed."), false);
  }
};

const upload = multer({ storage, fileFilter });

// Route for updating the profile picture
router.post(
  "/",
  authMiddleware,
  upload.single("profilePicture"),
  async (req, res) => {
    try {
      if (!req.file) {
        throw new Error("No file uploaded.");
      }

      // Retrieve the file path or URL of the uploaded profile picture
      const filePath = req.file.path; // Multer stores the file in the specified destination folder

      // Retrieve the user ID from the authenticated request
      const userId = req.user.id;

      // Update the user's profile picture in the database
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { profilePicture: filePath },
        { new: true }
      );

      res.json(updatedUser);
    } catch (error) {
      console.error("An error occurred:", error);
      res.status(500).json({ error: "Profile picture update failed" });
    }
  }
);

module.exports = router;
