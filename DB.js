require('dotenv').config();

const fs = require('fs')
const mongoose = require('mongoose');

const Course = require('./models/courseModel');
// const CourseJson = require('./indexed.json');   

const CourseJson = JSON.parse(fs.readFileSync('./indexed.json','utf-8'));


const start = async () => {

    try {
   
        mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
          console.log("listening on 5000");
        //   app.listen(5000);
        })
        .catch((error) => {
        console.log(error);
        })
      await Course.create(
        [
          {
            "code": "EC2.202",
            "title": "Electronics Workshop II",
            "instructors": ["Anshu Sarje + Spandan Roy"]
          },
        
       
        ]
        
        
      );
      console.log('success');
    }
        catch (error) {
            console.log(error);
          }

          
 }



start();