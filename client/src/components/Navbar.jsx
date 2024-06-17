import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

const Navbar = () => {
  const auth = useContext(AuthContext)
  return (
    <>
    <div className="flex justify-between navbar bg-base-300 w-full">
      <div className="flex-1">
      <button className="font-extrabold text-3xl  text-blue-700 dark:text-white tracking-tighter">Review.iiith</button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ThemeToggle />
          </li>
          <li>
            {!auth.islogged && <Link to={'/add-course'} className="text-lg">Add new course </Link>}
          </li>
          <li>
            {!auth.islogged ? <NavLink to={'/login'} className="text-lg"> Login </NavLink> : <NavLink to={'/'} className="text-lg"> Logout </NavLink>}
          </li>
          <li>
            {!auth.islogged && <Link to={'/register'} className="text-lg text-italic"> Register </Link>}
          </li>
        </ul>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Navbar;
