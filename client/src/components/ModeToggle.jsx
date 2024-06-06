import React, { useEffect, useState } from 'react'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'   
const ModeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "winter"
      );
    
      const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("night");
        } else {
          setTheme("winter");
        }
      };
    
      // set theme state in localstorage on mount & also update localstorage on state change
      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);
  return (
    <button className="btn btn-square btn-ghost">
    <label className="swap swap-rotate w-12 h-12">
      <input type="checkbox"


        onChange={handleToggle}

        checked={theme === "winter" ? false : true}
      />

      <img src={sun} alt="light" className="w-8 h-8 swap-on" />

      <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
    </label>
  </button>
  )
}

export default ModeToggle
