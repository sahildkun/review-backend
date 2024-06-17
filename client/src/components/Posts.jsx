import React from 'react';
import Post from './Post';
import jsonData from "../assets/indexed.json";
import { useEffect, useState } from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';


import axios from 'axios'
import CourseCard from './CourseCard';
const Posts = () => {
  const id = useParams().id;
  const getCourseNameById = (courseId) => {
    const course = jsonData[courseId];
    return course ? course.title : "Course Not Found";
  };
  const courseName = getCourseNameById(id);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        let url = 'http://localhost:5000/api/courses/' + id + '/reviews'
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        const responseData = await response.json();
        // reviews = responseData['reviews'];
        console.log(responseData['reviews'][0]);
        setReviews(responseData.reviews);

        // setLoadedUsers(responseData.users);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);



  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  // console.log(data);


  return (
    <>
    <div className='flex flex-col items-center space-y-7 p-3'>
      <div className="flex items-center justify-between w-full">
        {/* Left section with image */}
        <div className="flex items-center">
          <NavLink to={'/'}>
        <button className="font-extrabold text-3xl  text-blue-700 dark:text-white tracking-tighter">Review.iiith</button>
        </NavLink>

        </div>

        {/* Middle section with id - courseName */}
        <div className=" text-4xl font-bold text-center tracking-tighter">
          {courseName} ({id})
        </div>

        {/* Right section with Add Review button */}
        <div></div>
        {/* <div>
          <button
            className="btn btn-success text"
            type="submit"
          
          >
            + Add Review
          </button>
        </div> */}
      </div>

      {/* Center the grid and display one block per row with animation effect */}
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div className='col-span-2 space-y-2'>
          <div className=' p-2'>
            <h1 className='text-2xl font-bold'>Reviews</h1>
          </div>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-transparent  rounded-md "

            >




              <Post review={review} />


            </div>
          ))}
        </div>
        <div>
        <CourseCard
        courseCode={id}
        courseName={courseName}

        />
        </div>
      </div>
    </div>
    </>
  );
};

export default Posts;
