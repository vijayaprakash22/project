const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 3000;

app.get("/track", (req, res) => {
  const data = {
    time: new Date().toISOString(),
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    userAgent: req.headers["user-agent"],
    referrer: req.headers["referer"] || "Direct"
  };

  fs.appendFileSync("clicks.log", JSON.stringify(data) + "\n");

  res.redirect("https://getform.io/f/aroxgeob");
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});

