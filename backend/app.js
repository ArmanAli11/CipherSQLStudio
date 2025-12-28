const express = require("express");
const cors = require("cors");
const executeQueryRoute = require("./routes/executeQuery");
const hintRoute = require("./routes/hint");

const app = express();

app.use(cors());
app.use(express.json()); // 👈 THIS MUST EXIST

app.use("/api/execute", executeQueryRoute);
app.use("/api", hintRoute);

module.exports = app;
