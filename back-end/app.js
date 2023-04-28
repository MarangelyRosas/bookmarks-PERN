// Dependencies
const express = require('express');
const cors = require('cors');
const bookmarksControllers = require("./controllers/bookmarksControllers");

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); //parses incoming json request

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

app.use("/bookmarks", bookmarksControllers);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;
