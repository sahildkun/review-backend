import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const Card = ({ courseCode, courseName, instructors }) => {
  const randomColor = getRandomColor();

  const [coursesReviewInfo, setCoursesReviewInfo] = useState([]);

  useEffect(() => {
    // Make a GET request to the API
    axios.get(`http://localhost:5000/api/courses/${courseCode}/reviews`)
      .then(response => {
        // Handle successful response
        setCoursesReviewInfo(response.data.reviews);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div className="card w-full bg-white shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
      <div className="bg-colorful w-full h-48 object-cover  rounded-md" style={{ backgroundColor: randomColor }}>
        <div className="text-center pt-16">
          <span className="text-white text-lg font-bold">{courseName}</span>

        </div>
      </div>
      <div className="card-body flex-grow flex flex-col justify-between p-4">
        <div>

          <h1 className="text-lg font-semibold text-left ">{instructors}</h1>
          {/* <p className="text-sm">{coursesReviewInfo.length} Reviews</p> */}

        </div>
        <div class="flex flex-row  justify-between items-center mt-5">
          <p class="text-sm text-left">{ coursesReviewInfo.length } Reviews</p>
          <div class="badge badge-outline ">{courseCode }</div>
        </div>

      </div>
    </div>
  );
};

export default Card;
