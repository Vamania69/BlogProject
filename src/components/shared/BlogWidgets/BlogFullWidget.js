import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

function BlogFullWidget() {
  return (
    <div className="full-blog-container   m-[1rem.5rem] rounded-2xl border-border border-2">
      <div className="img-container">
        <img
          src="./assets/right-slide-home.jpg"
          className="h-[300px] rounded-2xl"
          alt=""
        />
      </div>
      <div className="blog-contnet m-5">
        <button className="category category-sport">sport</button>
        <button className="category category-tech ">tech</button>
        <h1>Blog TItile content</h1>
        <p className="content text-border ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          facere asperiores aliquam cum vel velit voluptas optio rem expedita
          accusamus.
        </p>
        <div className="writer">
          <img src="" alt="" />
          <p className="writer-name"></p>
        </div>
        <div className="blog-impression">
          <button className="blog-like bg-container p-[.25rem.5rem] mr-1  rounded-xl hover:bg-primary">
            {" "}
            <FcLikePlaceholder /> <FcLike /> 2{" "}
          </button>
          <button className="blog-comment bg-container p-[.25rem.5rem] rounded-xl hover:bg-primary">
            {" "}
            <BiMessageDetail /> 4
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogFullWidget;
