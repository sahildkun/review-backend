import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CourseCard = ({
    courseName,
    courseCode
}) => {
    const navigate = useNavigate();

    const {data,isLoading} = useQuery({
        queryKey: ['courseInfo',courseCode],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/api/courses/${courseCode}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    })

    if(isLoading){
        return <p>Loading...</p>
    }
    if(!data){
        return <p>Unable to get the information </p>
    }

    
  return (
 
      <div className="card w-96 bg-base-100 shadow-xl border ">
  <figure > <img src="/courses2.jpg" alt="Shoes" /></figure>
  <div className="card-body space-y-3">
    <h2 className="card-title">{courseName}</h2>
    <span className="badge badge-outline font-bold text-md">{courseCode}</span>
   <div className='text-left text-sm'>
    {data && data.course.instructors.map((instructor) => {
        return <p className=''>Instructor: {instructor}</p>;
    }
    )}
   </div>
    <div className="">
      <button className="btn btn-primary text-white w-full"
        onClick={() => navigate(`/reviewform/${courseCode}`)}
      >Add Review</button>
    </div>
  </div>
</div>

  )
}

export default CourseCard
