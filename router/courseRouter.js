const express = require('express');
const router = express.Router();

const courseData = require('../indexed.json')
const courseControllers = require('../controllers/courseController');

router.get('/:courseId',courseControllers.getCourseById)
router.post('/:courseId/add-review')
router.get('/prof/:profId', courseControllers.getCourseByProfId)
router.post('/',courseControllers.createCourse);



module.exports = router;