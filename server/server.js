require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");
const registerRoute = require("./routes/register");
const userRoute = require("./routes/userRoute");
const profileRoute = require("./routes/profile");
const updateUserRoute = require("./routes/UpdateUserInfo");
const postsRouter = require("./routes/post");
const deleteRouter = require("./routes/deletePost");
const updateRouter = require("./routes/updatePost");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Backend");
});

// routes
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/register", registerRoute);
app.use("/user", userRoute);
app.use("/profilePic", profileRoute);
app.use("/updateUserData", updateUserRoute);
app.use("/Post", postsRouter);
app.use("/deletePost", deleteRouter);
app.use("/updatePost", updateRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
