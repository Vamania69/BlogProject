import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import "./navbar.css";
import Login from "../../Login/Login";
import { getAuth, signOut } from "firebase/auth";
import { setLoggedOut } from "../../../features/UserStatusSliceStore";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { set } from "lodash";
import { searchHandler } from "../../Home/Home";
import { setBlogs } from "../../../features/BlogsListSlice";

const Navbar = () => {
  const navigate = useNavigate();

  //state of login model page is visible or not
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
  const setLoginVisibleHandler = setLoginVisible;
  const dispatch = useDispatch();
  // getting the user status from the store
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser);
  // destructuring the user status
  const { isLoggedIn, userDetails } = currentUser;

  // open and close mobile menu
  const [isMenuOpen, setMenuOpen] = useState("hidden");

  // open handler changes the className to flex
  const openMenu = () => {
    setMenuOpen("flex");
    console.log(isMenuOpen);
  };
  // close handler chnages the className to hidden
  const closeMenu = (e) => {
    setMenuOpen("hidden");
    // if user clicks on the close-menu-button or any section of the menu then close the menu
    if (e.target.id !== "close-menu-button" || e.target.id !== "mob-menu")
      setMenuOpen("hidden");
    console.log(isMenuOpen);
  };

 

  return (
    <>
      <nav
        className="navbar w-auto bg-primary min-h-[65px] border-b-2 border-border text-white flex justify-between"
        id="navbar"
      >
        {
          //passing the login model with visible status & funtion to close
        }
        <div className="flex justify-between w-[100%]   ">
          <Login
            visible={isLoginVisible}
            setVisible={setLoginVisibleHandler}
            onClose={closeHandler}
          />
          <div className="left-container flex  ml-5 ">
            <img src="./assets/logo.png" className="h-14" alt="" />
            <ul className="navigation items-center max-md:hidden flex justify-end ">
              <li>
                <Link to={"/"}> Home</Link>
              </li>
              <li>
                <Link to={"/blogs"}> Blogs</Link>
              </li>
              {
                //  if user is logged in then show the welcome message else show the login button
              }
              {isLoggedIn ? (
                <li
                  // signout funtion from firebase auth
                  onClick={() => {
                    const auth = getAuth();
                    // store dispatch function to set the userSlice to logged out
                    dispatch(setLoggedOut());

                    signOut(auth)
                      .then(() => {
                        // Sign-out successful.
                        console.log("signed out");
                        toast.success("Signed out successfully");
                        navigate("/");
                      })
                      .catch((error) => {
                        // An error happened.
                        console.log(error.message);
                      });
                  }}
                >
                  Welcome {userDetails.displayName} !!
                </li>
              ) : (
                <li onClick={loginHandler}>Login </li>
              )}
            </ul>
          </div>
          <div className="right-container bg-primary  flex items-center mt-3  mr-8 mb-4 ">
            
          </div>
          <div
            id="hamburger-menu"
            onClick={openMenu}
            className="hamburger-menu text-4xl m-3 max-2xl:hidden max-md:block cursor-pointer max-xs:ml-2"
          >
            <GiHamburgerMenu />
          </div>

          {
            // mobile menu section
          }
          <section
            onClick={closeMenu}
            id="mob-menu"
            className={`bg-primary text-white  ${isMenuOpen}  flex-col items-center  w-full  fixed top-0 left-0 z-30 origin-top animate-open-menu `}
          >
            <button
              onClick={closeMenu}
              id="close-menu-button"
              className="close-menu-button self-end m-0 text-6xl p-3 cursor-pointer top-0"
            >
              &times;
            </button>
            <nav className="mob-menu h-[100vh] w-full text-center  flex flex-col justify-center">
              <Link to={"/"}> Home</Link>
              <Link to={"/blogs"}> Blogs</Link>
              <div
                onClick={loginHandler}
                className="login-button cursor-pointer"
              >
                Login
              </div>
              <Link to={"/register"}>Register</Link>
            </nav>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
