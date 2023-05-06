import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import "./navbar.css";
function Navbar() {
  return (
    <>
      <nav
        className="navbar w-auto bg-primary min-h-[65px] border-b-2 border-border text-white flex justify-between"
        id="navbar"
      >
        <div class="left-container flex  ml-5 ">
          <img src="./assets/logo.png" className="h-14" alt="" />
          <ul className="navigation items-center max-xs:hidden flex justify-end ">
            <li>
              <Link to={"/"}> Home</Link>
            </li>
            <li>
              <Link to={"/blogs"}> Blogs</Link>
            </li>
            <li>
              <Link to={"/login"}> Login</Link>
            </li>
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
          <div className="hamburger-menu  max-2xl:hidden max-xs:block max-xs:ml-2"> <GiHamburgerMenu /> </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;




// const options = {
//   method: 'GET',
//   url: 'https://spotify23.p.rapidapi.com/search/',
//   params: {
//     q: 'coke studio',
//     type: 'multi',
//     offset: '0',
//     limit: '10',
//     numberOfTopResults: '5'
//   },wxextra50
//   headers: {
//     'X-RapidAPI-Key': 'c0729c408fmsh257b5aa4d3e3915p1b335bjsnf6d13d602a24',
//     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });