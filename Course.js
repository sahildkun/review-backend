const Courses = require('./indexed.json');

const CourseModel = require('../models/courseModel');


  

const start = async () => {
  try {
    mongoose
.connect('mongodb+srv://sahilsahoo23:Sahil@12345@cluster0.g6ceca2.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  console.log("listening on 5000");
  app.listen(5000);
})
.catch((error) => {
console.log(error);
})
  
  } catch (error) {
    console.log(error);
  }
};


start();
