
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve Nova frontend files
app.use(express.static(__dirname));

// Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Nova API
app.get("/api/info", (req, res) => {
    res.json({
        name: "Nova",
        version: "1.0",
        status: "Running",
        message: "Welcome to Nova API!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Nova server running on port ${PORT}`);
});
app.get("/test", (req, res) => {
    res.send("NOVA UPDATED SERVER WORKING!");
}); 