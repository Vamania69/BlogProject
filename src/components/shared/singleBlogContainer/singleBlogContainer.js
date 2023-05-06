import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BiMessageDetail } from "react-icons/bi";

function SingleBlogContainer() {
    return <div className="blog blog-container m-[16px.0px] flex border-border border-solid border-[1px] rounded-2xl p-5">
        <div className="blog-left  w-1/2 ">
            <div className="category category-sport">Sport</div>
            <h2 className="blog-title">
                hello javascript
            </h2>
            <p className="text-border writer">
                writer
            </p>
            <div className="blog-impression">
                <button className="blog-like bg-container p-[.25rem.5rem] p m-2 rounded-xl hover:bg-primary"> <FcLikePlaceholder /> <FcLike /> 2 </button>
                <button className="blog-comment bg-container p-[.25rem.5rem] m-2 rounded-xl hover:bg-primary"> <BiMessageDetail /> 4</button>
            </div>
        </div>
        <div className=" blog-right ml-5 w-1/2 ">
            <img src="./assets/right-slide-home.jpg" className="rounded-xl" alt="" />
        </div>

    </div>;
}

export default SingleBlogContainer;
