require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");
const registerRoute = require("./routes/register");
const userRoute = require("./routes/userRoute");
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

// routes
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/register", registerRoute);
app.use("/user", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
