import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseNavbar from '../components/CourseNavbar';
const Courses = () => {
    // State to store the courses data
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        // Make a GET request to the API
        axios.get('http://localhost:5000/api/courses')
            .then(response => {
                // Handle successful response
                console.log('Data:', response.data.courses);
                // Update the courses state with the data from the API response
                setCourses(response.data.courses);

                console.log('Courses:', courses);
                
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
        <>
         <CourseNavbar />
        <div className='text-black'>
           
            {
                // Check if courses data is available
                courses ? 
                    // Render courses if available
                   <>
                   {courses.map(course => (
                          <div key={course._id}>
                               <h2>{course.code}</h2>
                               <p>{course.name}</p>
                               <p>{course.instructors}</p>
                          </div>
                   ))}
                   </>
                    // Render loading message while data is being fetched
                    : <div className='text-black'>loading...</div>
            }
        </div>
        </>
    );
}

export default Courses;
