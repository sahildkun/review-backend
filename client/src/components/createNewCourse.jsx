import React, { useState } from 'react'

const NewCourse = ({ data, handleChange }) => {

  return (
    <div className='flex flex-col gap-5 text-black items-center'>
      <div>
        <label htmlFor="courseName" className="block mb-2 text-base font-medium text-black">Course Name</label>
        <input
          id="courseName"
          name="courseName"
          className="input input-bordered join-item w-full bg-white"
          placeholder="Enter your Course Name"
          value={data.courseName}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="courseID" className="block mb-2 text-base font-medium text-black">Course ID</label>
        <input
          type="text"
          id="courseId"
          name="courseId"
          className="input input-bordered join-item w-full bg-white"
          placeholder="Enter your Course ID"
          value={data.courseId}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="courseInstructor" className="block mb-2 text-base font-medium text-black">Course Instructor</label>
        <input
          id="courseInstructor"
          name="courseInstructor"
          className="input input-bordered join-item w-full bg-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter the Name of the Instructor"
          onChange={handleChange}
          value={data.courseInstructor}
        />
      </div>
    </div>  
  )
}

export default NewCourse