import React from 'react'
import { useState } from 'react';
import NewCourse from './createNewCourse';
const Form = () => {
    const [data, setData] = useState({
        courseName: "",
        courseInstructor: "",
        courseId: ""
    });



    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }

    const handleChange = e => {
        // const type = e.target.type

        const name = e.target.name

        const value = e.target.value;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }


    const canSave = data.courseId === "" || data.courseInstructor === "" || data.courseName === ""
    return (
        <div className="gap-10 bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 rounded-lg shadow-xl bg-white">
                <h2 className="text-3xl text-black text-center font-bold mb-8">Add your Course Here</h2>
                <form className="space-y-4" onSubmit={handleSubmit} >

                    <NewCourse data={data} handleChange={handleChange} />

                    <button type='submit' disabled={canSave} className="btn join-item rounded-full mt-10 text-white">
                        Add this Course
                    </button>
                </form>
            </div>
        </div>

    )

}

export default Form