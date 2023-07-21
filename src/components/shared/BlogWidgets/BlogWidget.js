import React, { useState, useEffect } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BiMessageDetail } from "react-icons/bi";
import { slice } from "lodash";

function BlogWidget({blog , blogTitleLimit , blogWordLimit}) {
  

  //this is a widegt of a blog that render as a random suggestion

  //state that will hold the article and update if needed

  // useEffect = () => {
  //   // const [currentBlog, setCurrentBlog] = useState({});
  //   // // here we will write an async function to render some random blog as object and set it to the currentBlog state
  //   // const getData = async () => {
  //   //   try {
  //   //     const response = await axios.get(`localhost:8000/api/blogs`);
  //   //     console.log(response);
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // };
  //   // getData();
  // };


  console.log(blog);

  // extract the data from the blog object
   const {title, content, coverImage , category, writer, likes, comments} = blog;
   
   console.log(blogTitleLimit)
    return (
    <div className="blog blog-container  m-[16px.0px]   md:flex border-border border-solid border-[1px] mx:max-h-[245px] mx:min-h-[240px] rounded-2xl md:p-5 min-w-[33%] ">
      <div className=" blog-right  md:w-2/5     ">
        <img
          src={coverImage}
          className="rounded-xl w-[100%]  h-[100%] max-h-[185px] xs:max-h-[415px]  md:max-h-[220px] "
          alt="image"
        />
      </div>
      <div className="blog-left pl-2  md:w-3/5 ">
        <div className= {`category category-${category} `} >{category}</div>
        <h2 className="blog-title">{title.slice(0,blogTitleLimit)}...</h2>
        <p>{content.slice(0,blogWordLimit)}...</p>

        <div className="text-border writer flex text-white">
          <div className="writter-profile mr-2   ">
            <img
              src="https://thumbs.dreamstime.com/z/beautiful-female-writer-portrait-caucasian-woman-writing-book-her-desk-laptop-117750209.jpg?w=992"
              alt="writter profile"
              className=" w-10 h-10 rounded-[50%]"
            />
          </div>
          <div className="writter-details flex items-center text-border">
            <h4 className="items-center">{writer}</h4>
          </div>
        </div>
        <div className="blog-impression flex text-white">
          <button className="blog-like bg-container p-[.25rem.5rem] p m-2 rounded-xl hover:bg-primary">
            <FcLikePlaceholder />  {likes}
          </button>
          <button className="blog-comment bg-container p-[.25rem.5rem] m-2 rounded-xl hover:bg-primary">
            <BiMessageDetail /> 4
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogWidget;
