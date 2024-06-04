const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const connectDB = require('./db/connect');

const HttpError = require('./models/http-error');
const courseRouter = require('./router/courseRouter');
const authRouter = require('./router/authRouter')
require('dotenv').config()

// console.log(process.env);
const app = express();
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());



app.use(express.json());



app.use('/api/courses', courseRouter);
app.use('/api/user', authRouter)

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({ message: error.message || 'An unknown error occurred!' });
});

app.get('/', (req, res) => {
  res.send('Hello World');
})



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("listening on 5000");
    app.listen(5000);
  })
  .catch((error) => {
    console.log(error);
  })






// mongoose
// .connect('mongodb+srv://sahilsahoo23:Sahil@12345@cluster0.g6ceca2.mongodb.net/?retryWrites=true&w=majority')
// .then(() => {
//   console.log("listening on 5000");
//   app.listen(5000);
// })
// .catch((error) => {
// console.log(error);
// })
