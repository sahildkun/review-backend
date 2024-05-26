const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authMiddleware')
const courseData = require('../indexed.json')
const courseControllers = require('../controllers/courseController');
const reviewControllers = require('../controllers/reviewController')
router.get('/prof/:profId', courseControllers.getCourseByProfId)
router.get('/:courseId',courseControllers.getCourseById)
router.get('/:courseId/reviews',reviewControllers.getReviewsByCourseCode)

router.patch('/:courseId/reviews/:reviewId',reviewControllers.editReview);
router.delete('/:courseId/reviews/:reviewId',reviewControllers.deleteReview);
// router.use(checkAuth);
router.post('/:courseId/add-review',reviewControllers.createReview)
// router.post('/',courseControllers.createCourse);
router.use('/',courseControllers.getAllCourses);



module.exports = router;