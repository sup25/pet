require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const registerRouter = require("./routes/register");


const app = express();

// connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

// middleware
app.use(express.json());

// routes
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/register", registerRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
