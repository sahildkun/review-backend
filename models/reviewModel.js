import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true,
    ref: "Course", // Reference to the Course model using the code field
  },
  reviewContent: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    enum:['Spring', 'Monsoon'],
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  isAnonymous: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("Review", reviewSchema);

// export default Review;
