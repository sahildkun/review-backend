const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const connectDB = require('./db/connect');

const HttpError = require('./models/http-error');
const courseRouter = require('./router/courseRouter');
const userRouter = require('./router/authRouter')
require('dotenv').config()

// console.log(process.env);
const app = express();
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// app.use((req,res,next) => {
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader(
//   'Access-Control-Allow-Headers',
//   'Origin, X-requested-With, Content-Type, Accept, Authorization'
//   );
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
//   next();
// })

app.use('/api/courses',courseRouter);
app.use('/api/users/', userRouter)

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});


app.get('/',(req,res) => {
  res.send('Hello World');
})


const start = async () => {
  try {
   
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  console.log("listening on 5000");
  app.listen(5000);
})
.catch((error) => {
console.log(error);
})}
catch (error) {
    console.log(error);
  }
};


start();


// app.use((error, req, res, next) => {
//     if (res.headerSent) {
//       return next(error);
//     }
//     res.status(error.code || 500)
//     res.json({message: error.message || 'An unknown error occurred!'});
//   });
  
// mongoose
// .connect('mongodb+srv://sahilsahoo23:Sahil@12345@cluster0.g6ceca2.mongodb.net/?retryWrites=true&w=majority')
// .then(() => {
//   console.log("listening on 5000");
//   app.listen(5000);
// })
// .catch((error) => {
// console.log(error);
// })
