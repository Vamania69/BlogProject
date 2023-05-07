import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BiMessageDetail } from "react-icons/bi";
function SingleBlogContainer() {
  return (
    <div className="blog blog-container  m-[16px.0px]   md:flex border-border border-solid border-[1px] rounded-2xl md:p-5 min-w-[33%] ">
      <div className=" blog-right  md:w-1/2  ">
        <img
          src="./assets/right-slide-home.jpg"
          className="rounded-xl w-[100%]"
          alt=""
        />
      </div>
      <div className="blog-left pl-2  md:w-1/2 ">
        <div className="category category-sport">Sport</div>
        <h2 className="blog-title">hello javascript</h2>
        <div className="text-border writer flex text-white">
          <div className="writter-profile mr-2   ">
            <img
              src="/assets/logo.png"
              alt="writter profile"
              className=" w-10 h-10 rounded-[50%]"
            />
          </div>
          <div className="writter-details flex items-center text-border">
            <h4 className="items-center">Varun Agrawal</h4>
          </div>
        </div>
        <div className="blog-impression flex text-white">
          <button className="blog-like bg-container p-[.25rem.5rem] p m-2 rounded-xl hover:bg-primary">
            <FcLikePlaceholder /> <FcLike /> 2
          </button>
          <button className="blog-comment bg-container p-[.25rem.5rem] m-2 rounded-xl hover:bg-primary">
            <BiMessageDetail /> 4
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogContainer;
