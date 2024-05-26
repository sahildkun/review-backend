const Review = require('../models/reviewModel')


const HttpError = require('../models/http-error')
const { v4: uuidv4 } = require('uuid');

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

    res.json({reviews:courseReviews.map(review => review.toObject({getters:true}))});
}

const editReview = async (req,res,next) => {
    const reviewId = req.params.reviewId;
    console.log(reviewId);
    const {reviewContent,isAnonymous} = req.body;

    let review;
    try {
        review = await Review.findById(reviewId);
    } catch (error) {
        const err = new HttpError('could not find review',500);
        return next(err);
    }

    review.reviewContent = reviewContent;
    review.isAnonymous = isAnonymous;

    try {
        await review.save();
    } catch (error) {
        const err = new HttpError('could not save review',500);
        return next(err);
    }

    res.json({review:review.toObject({getters:true})});
}


const deleteReview = async (req, res, next) => {
  const reviewId = req.params.reviewId;

  let review;
  try {
      review = await Review.findById(reviewId); 
      if (!review) {
          const err = new HttpError('Could not find review', 404);
          return next(err);
      }
  } catch (error) {
      const err = new HttpError('Could not find review', 500);
      return next(err);
  }

  try {
      console.log(review); // For debugging: ensure review is found
      await Review.findByIdAndDelete(reviewId);
      console.log(`Review with ID ${reviewId} deleted`); // For debugging: log successful deletion
  } catch (error) {
      console.error(`Error deleting review with ID ${reviewId}:`, error); // Log detailed error
      const err = new HttpError('Could not delete review', 500);
      return next(err);
  }

  res.status(200).json({ message: 'Review deleted' });
};


exports.createReview = createReview;
exports.getReviewsByCourseCode = getReviewsByCourseCode;
exports.editReview = editReview; 
exports.deleteReview = deleteReview;

