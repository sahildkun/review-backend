import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

const Navbar2 = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <header>
        <div className="navbar bg-white shadow-xl px-3 rounded">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                <li>
                  <Link to="/">Item1</Link>
                </li>
                <li>
                  <div className="bg-black text-white" to="/">
                    Parent
                    <ul className="p-2 text-black">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </div>
                </li>
                <li><a>Item 3</a></li>
              </ul> */}
            </div>
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/e/e1/International_Institute_of_Information_Technology%2C_Hyderabad_logo.png"
                alt="IIITH Logo"
                className="w-40 h-auto mr-5"></img>
            </Link>
            <h1 className="font-serif text-blue-900">Review Portal</h1>
          </div>
          {/* <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Item 1</a></li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div> */}
          <div className="navbar-end">
            <div>
              {!auth.islogged ? (
                <Link to={'/register'} className="btn mr-8 text-white">
                  Register
                </Link>
              ) : (
                <>
                  <NavLink to={'/'} className="btn mr-8 text-white">
                    Logout
                  </NavLink>
                  <NavLink to={'/add-course'} className="btn mr-8 text-white">
                    Add New Courses
                  </NavLink>
                </>
              )}
            </div>
            <div>
              {!auth.islogged ? (
                <NavLink to={'/login'} className="btn mr-3 text-white">
                  Log In
                </NavLink>
              ) : null}
            </div>

          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar2;
