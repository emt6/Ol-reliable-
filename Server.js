// server.js
const express = require("express");
const path = require("path");
const app = express();
// serve every file in this folder over HTTP
app.use(express.static(path.join(__dirname)));
app.listen(3333, () => console.log("🟢 Serving on http://localhost:3333"));
