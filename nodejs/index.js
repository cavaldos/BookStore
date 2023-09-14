const express = require("express");

const app = express();
const cors = require("cors");
const morgan = require("morgan");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
});

app.get("/hi", (req, res) => {
  console.log("Hello World");
  res.json({ message: "ihihiihiihihihiihihigadgad!" });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
