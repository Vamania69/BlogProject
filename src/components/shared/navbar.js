import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import "./navbar.css";
import Login from "../Login/Login";
function Navbar() {
  //state of login model is visible or not
  const [isLoginVisible, setLoginVisible] = useState(false);
  // setting state of loggin model to true to make it visible
  const loginHandler = () => {
    setLoginVisible(true);
  };
  // close funtion for the login model
  const closeLoginHandle = () => {
    setLoginVisible(false);
  };
  // funtion as props to model component to close using the close button
  const closeHandler = closeLoginHandle;
  return (
    <>
      <nav
        className="navbar w-auto bg-primary min-h-[65px] border-b-2 border-border text-white flex justify-between"
        id="navbar"
      >
        {" "}
        {
          //passing the login model with visible status & funtion to close
        }
        <Login visible={isLoginVisible} onClose={closeHandler} />
        <div class="left-container flex  ml-5 ">
          <img src="./assets/logo.png" className="h-14" alt="" />
          <ul className="navigation items-center max-xs:hidden flex justify-end ">
            <li>
              <Link to={"/"}> Home</Link>
            </li>
            <li>
              <Link to={"/blogs"}> Blogs</Link>
            </li>

            <li onClick={loginHandler}>Login</li>
          </ul>
        </div>
        <div className="right-container bg-primary  flex items-center mt-3  mr-8 mb-4 ">
          <form action="" className="search flex  ">
            <input
              type="text"
              name="search"
              placeholder="  Search blogs"
              id="search"
              className="b-none rounded-md text-black p-1 max-md:hidden  flex "
            />
            <span className="bg-container max-xs:block items-center cursor-pointer  p-2">
              <FiSearch />
            </span>
          </form>
          <div className="hamburger-menu  max-2xl:hidden max-xs:block max-xs:ml-2">
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
