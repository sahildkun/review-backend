import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ModeToggle from "./ModeToggle";
import RegisterButton from "./RegisterButton";
const NavigationMenu = () => {




  return (
    <>
      <header>
        <div className=" navbar p-3 rounded">
          <div className="navbar-start">

        
            <h1 className="font-serif text-3xl">Review Portal IIIT-H</h1>
          </div>

          <div className="navbar-end">
            <div>
            <Link to={'/register'} className="btn mr-8  ">
                Register
              </Link>


            </div>
            <div>

            <Link to={'/login '} className="btn mr-8 ">
               Log in
              </Link>

            </div>
            <ModeToggle />

          </div>
        </div>
      </header>
      {/* <Outlet /> */}
    </>
  );
};

export default  NavigationMenu;
