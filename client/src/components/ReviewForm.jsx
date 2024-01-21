import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../assets/indexed.json";

const ReviewForm = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [textareaContent, setTextareaContent] = useState("");
  const maxWordLimit = 250;
  const id = useParams().id;
  const getCourseNameById = (courseId) => {
    const course = jsonData[courseId];
    return course ? course.title : "Course Not Found";
  };
  const courseName = getCourseNameById(id);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTextareaChange = (event) => {
    const content = event.target.value;
    // Calculate word count
    const wordCount = content.trim().split(/\s+/).length;

    // Limit the textarea content to 250 words
    if (wordCount <= maxWordLimit) {
      setTextareaContent(content);
    }
  };

  return (
    <div className="flex flex-row gap-9 justify-center items-center h-screen">
      <div className="flex flex-col relative">
        <div className="label">
          <span className="label-text text-2xl text-black font-bold">
            {id} - {courseName}
          </span>
        </div>
        <textarea
          placeholder="Mention workload, grade cutoffs, paper-patterns, course difficulty etc.."
          className="textarea textarea-bordered textarea-lg w-[50vw] h-[25vw] resize-none bg-white border border-black mt-4 p-4"
          value={textareaContent}
          onChange={handleTextareaChange}
        ></textarea>

        <div className="text-gray-500 absolute bottom-0 right-0 mr-4 mb-4">
          Words: {textareaContent.trim().split(/\s+/).length}/{maxWordLimit}
        </div>
        <div className="label mt-2">
          <span className="label-text text-sm text-gray-600">
            Please keep it relevant and concise.
          </span>
        </div>
      </div>

      <div className="grid grid-rows-4 gap-5">
        <div>
          <select className="select select-info w-auto bg-white text-black" required>
            <option value="" disabled selected>
              Select instructor
            </option>
            {/* ... (options) */}
          </select>
          {/* Validation message for instructor */}
        </div>

        <div className="label gap-9">
          <select className="select select-info w-auto bg-white text-black" required>
            <option disabled selected>
              Select semester
            </option>
            {/* ... (options) */}
          </select>
          <select className="select select-info w-auto bg-white text-black" required>
            <option disabled selected>
              Select year
            </option>
            {/* ... (options) */}
          </select>
          {/* Validation message for semester and year */}
        </div>

        <div className="form-control mt-2">
          <label className="label cursor-pointer">
            <span className="label-text text-left text-black">Post as anonymous</span>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="checkbox border-2 border-black"
            />
          </label>
        </div>
        <div>
          <button
            className="btn btn-wide btn-outline btn-primary btn-success mt-4"
            type="submit"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
