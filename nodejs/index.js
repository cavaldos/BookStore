const express = require("express");

const app = express();
const dotenv = require("dotenv");
// const MongoDB = require("./config/connectdb");
const cors = require("cors");
const morgan = require("morgan");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.json());
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// MongoDB.connect();
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to BookStore application." });
});
const port = process.env.PORT || 5000;
//ROUTES
const server = require("http").createServer(app);
server.listen(port, () => {
  console.log("Server is running on port", port);
});
