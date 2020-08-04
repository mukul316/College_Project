const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
  });

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });