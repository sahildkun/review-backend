import React, { useEffect, useState } from "react";
import jsonData from "../assets/indexed.json";
import { Link, useNavigate } from "react-router-dom";

const AutocompleteComponent = () => {
  let [code, setCode] = useState("");
  
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const extractedCode = inputValue.split(" ")[0]; // Extracting the first word as the code
    setCode(extractedCode);
  };



  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Cleanup function to re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="centered-container max-w-1000 mx-auto bg-gradient-to-r from-emerald-400 to-cyan-400">
      <div className="text- font-sans mt-32 mb-0 text-center">
        <h1 className="mb-10"><b>Why this portal?</b></h1>
        <p className="text-md px-36">Embark on your academic journey with confidence! Our course review portal is designed to empower students in making informed decisions about their subjects. Tired of choosing courses blindly and later regretting your choices? Look no further. At the beginning of each semester, students can delve into valuable insights and experiences shared by their peers who have previously taken the courses. No more guesswork – just real, candid reviews to guide you in selecting subjects that align with your interests and aspirations. Forget the hassle of scouring through Google Forms; our user-friendly portal allows you to effortlessly navigate and explore course reviews anytime, providing a comprehensive view for those planning their academic path in the future.</p>
      </div>

      <div className="join center-container -mt-60">
        <input
          className="input input-bordered join-item w-3/4 bg-slate-100 text-black"
          placeholder="Enter Course Name or Course Code..."
          autoComplete="on"
          list="datalistOptions"
          onChange={handleInputChange}
        />
        <datalist id="datalistOptions">
          {Object.entries(jsonData).map(([code, { title, instructors }]) => (
            <option key={code} value={`${code} - ${title}`} />
          ))}
        </datalist>
        <button className="btn join-item rounded-r-full text-white hover:text-[#535bf2]" type="submit" onClick={() => navigate(`/posts/${code}`)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default AutocompleteComponent;