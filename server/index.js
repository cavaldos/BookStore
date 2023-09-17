const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { connect } = require('./config/connectdb');

const bookRouter = require('./routes/book.route');
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');

const preventRouteCollision = require('./middleware/routes');

connect();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use(preventRouteCollision);
app.use('/book', bookRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
