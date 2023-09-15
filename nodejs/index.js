const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const bookRouter = require("./routes/book.route");
const { connect } = require("./config/connectdb");

connect();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use("/book", bookRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
