const logout = (req, res) => {
    // Clear the JWT token from the client
    res.clearCookie("token");
    res.sendStatus(200);
};

module.exports = logout;
