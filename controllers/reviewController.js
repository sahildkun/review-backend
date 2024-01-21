const Review = require('../models/reviewModel')


const HttpError = require('../models/http-error')


const createReview = async (req,res,next) => 
{   
   const courseCode = req.params.courseId
   console.log(courseCode);
   const  {
 
    instructor,
    isAnonymous,
    semester,
    userId,
    reviewContent,
    year,
   } = req.body;

  const createdReview = new Review({
    courseCode:courseCode,
    instructor:instructor,
    isAnonymous:isAnonymous,
    semester:semester,
    user:userId,
    reviewContent:reviewContent,
    year:year,
  })
  console.log(createdReview);
   
  try {
    await createdReview.save();
  } catch (error) {
    console.error("Error during course save:", error); 
      const err = new HttpError('Creating Review failed',500);

      return next(err)
  }
  res.status(201).json({
    review:createdReview
  });
}

const getReviewsByCourseCode = async (req,res,next) => {
    const courseCode = req.params.courseId;
    console.log(courseCode);

    let courseReviews;

    try {
        courseReviews = await Review.find({
            courseCode:courseCode
        })
    } catch (error) {
        const err = new HttpError(`no course with id ${courseCode}`,404);

        return next(err)
    }

    res.json({reviews:courseReviews})
}

exports.createReview = createReview;
exports.getReviewsByCourseCode = getReviewsByCourseCode;

