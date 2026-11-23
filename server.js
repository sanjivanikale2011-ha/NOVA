
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

// Allow the server to understand JSON data
app.use(express.json());

// First API route
app.get("/", (req, res) => {
    res.send("Welcome to Nova Backend!");
});

// Nova API - Basic information
app.get("/api/info", (req, res) => {
    res.json({
        name: "Nova",
        version: "1.0",
        status: "Running",
        message: "Welcome to Nova API!"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Nova server is running at http://localhost:${PORT}`);
});
