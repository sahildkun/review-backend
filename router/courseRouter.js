const express = require('express');
const router = express.Router();

const courseData = require('../indexed.json')
const courseControllers = require('../controllers/courseController');
const reviewControllers = require('../controllers/reviewController')
router.get('/:courseId',courseControllers.getCourseById)
router.get('/:courseId/reviews',reviewControllers.getReviewsByCourseCode)
router.post('/:courseId/add-review',reviewControllers.createReview)
router.get('/prof/:profId', courseControllers.getCourseByProfId)
router.post('/',courseControllers.createCourse);



module.exports = router;