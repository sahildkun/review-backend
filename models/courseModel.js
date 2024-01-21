const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    instructors: {
        type: [String],
        required: true,
    },
})

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
// export {Course};