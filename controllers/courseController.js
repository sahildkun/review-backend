const courseData = require('../indexed.json');
const Course = require('../models/courseModel');
const HttpError = require('../models/http-error');



const getAllCourses = async (req,res,next) => { 
    
  let courses;
  try {
    courses = await Course.find();
    console.log("Courses fetched successfully");
  } catch (error) {
    logger.error("Error during course fetch:", error);
  }
  res.status(200).json({courses:courses});
}

const getCourseById = async (req,res,next) => {
    const cid = req.params.courseId;
console.log(cid);
    let course;

    try {
      course = await Course.findOne({
        code:cid
      })
      console.log(course);
    } catch (error) {
      const err = new HttpError(`no course with code ${course}`,404);

      return next(err)
    }
    
    res.json({course: course})
}

const getCourseByProfId = async (req,res,next) => {
    const pid = req.params.profId;
    
  
    let filteredCourses ;

    try {
      filteredCourses = await Course.find({instructors: pid})
      
    } catch (error) {
      
      const err = new HttpError(`no course with prof ${pid}`,404);

      return next(err)
    }

    // Loop through each course
    // for (const courseCode in courseData) {
    //   if (courseData.hasOwnProperty(courseCode)) {
    //     const instructors = courseData[courseCode].instructors;
    
    //     // Check if the desired instructor is present
    //     if (instructors && instructors.includes(pid)) {
    //       filteredCourses[courseCode] = courseData[courseCode];
    //     }
    //   }
    // }
    
    // if ( Object.keys(filteredCourses).length === 0 && filteredCourses.constructor === Object) {
        
    //     const error = new Error('NOT FOUND ');
    //     error.code = 404
    //     return next(error);


    //   }
    //   else {
    //     console.log('it is what ir is');
    // res.json({filteredCourses})
    //   }
    res.json({course:filteredCourses})
}

const createCourse = async (req,res,next) => {

    const {courseId,courseInstructors,courseTitle} = req.body;

    const createdCourse = new Course({
      code:courseId,
      instructors:courseInstructors,
      title:courseTitle
      
    })
    console.log(createdCourse);
    // courseData[courseId] = {
    //     "title": courseTitle,
    //     "instructors": [courseInstructor]
    //   };

    try {
      await createdCourse.save();
      
    } catch (error) {
      console.error("Error during course save:", error); 
      const err = new HttpError('Creating Course failed',500);

      return next(err)
    }
      
    res.status(201).json({
      course:createdCourse
    });


}

exports.getCourseById = getCourseById;
exports.getCourseByProfId = getCourseByProfId;
exports.createCourse = createCourse;
exports.getAllCourses = getAllCourses;