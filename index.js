require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 80;

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send({ version: process.env.VERSION });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
