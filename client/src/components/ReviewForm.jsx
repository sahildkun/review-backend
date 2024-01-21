import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../assets/indexed.json";
import { useEffect } from "react";
const ReviewForm = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [textareaContent, setTextareaContent] = useState("");
  const maxWordLimit = 250;
  const id = useParams().id;
  console.log(id);
  const getCourseNameById = (courseId) => {
    const course = jsonData[courseId];
    return course ? course.title : "Course Not Found";
  };
  const courseName = getCourseNameById(id);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState('');

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/courses/${id}`);
        
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        const responseData = await response.json();
        console.log(responseData.course.instructors);
        setInstructors(responseData.course.instructors);
      
        
        // setLoadedUsers(responseData.users);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

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
          className=" text-black textarea textarea-bordered textarea-lg w-[50vw] h-[25vw] resize-none bg-white border border-black mt-4 p-4"
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
            {instructors.map((instructor, index) => (
          <option key={index} value={instructor}>
            {instructor}
          </option>
        ))}
          </select>
          {/* Validation message for instructor */}
        </div>

        <div className="label gap-9">
          <select className="select select-info w-auto bg-white text-black" required>
            <option disabled selected>
              Select semester
            </option>
            <option>Summer</option>
            <option>Monsoon</option>
          </select>
          <select className="select select-info w-auto bg-white text-black" required>
            <option disabled selected>
              Select year
            </option>
            
             <option>2023</option>
             <option>2024</option>
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
