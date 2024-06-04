import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseNavbar from '../components/CourseNavbar';
import Card from '../components/ui/Card';
import { NavLink } from 'react-router-dom';

const Courses = () => {
    // State to store the courses data
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        // Make a GET request to the API
        axios.get('http://localhost:5000/api/courses')
            .then(response => {
                // Handle successful response
                setCourses(response.data.courses);
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once on component mount


    // Function to generate a random image URL
    const getRandomImageUrl = () => {
        const width = 300;
        const height = 200;
        return `https://picsum.photos/${width}/${height}?blur=2?random=${Math.floor(Math.random() * 1000)}`;
    };
    return (
        <>  
        <div className='bg-white shadow-2xl'>
            <CourseNavbar />
            </div>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-8 p-4 md:p-10 transition-colors duration-300 ease-in-out bg-white text-gray-900">
                <div className='text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>
                    {
                        // Check if courses data is available
                        courses ?
                            // Render courses if available
                            courses.map(course => (
                                <div key={course._id} className='w-full h-full'>
                                    <NavLink className={'text-black'} to={`/posts/${course.code}`}>
                                    <Card
                                        
                                        courseCode={course.code}
                                        courseName={course.title}
                                        instructors={course.instructors}
                                        
                                    />
                                    </NavLink>
                                </div>
                            ))
                            // Render loading message while data is being fetched
                            : <div className='text-black'>loading...</div>
                    }
                </div>
            </main>
        </>
    );
}

export default Courses;
