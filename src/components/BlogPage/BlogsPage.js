import React, { useEffect, useState } from "react";
import "./BlogPage.css";
import { forEach, set } from "lodash";
import BlogWidget from "../shared/BlogWidgets/BlogWidget";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function BlogPage() {
  // get the user login state from the store
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  // get the inital blog state from the store
  const blogsList = useSelector((state) => state.blogsList);
  console.log(blogsList);

  // set the initial state of the blogs
  const [blogsState, setBlogsState] = useState(blogsList.blogsList);
  // console.log(blogsState);

  // set the initial state of the blogs
  let startFrom = 0;

  // loading more blog wedgits feature while scrolling

  // async funtion to fetch the blogs
  // const getMoreWidget = () => {
  //   console.log("rendering");
  //   setState((prev) => prev + 10);
  // };

  // async funtion to get more blogs from server and rendering direclty as blogs widgets
  const getMoreBlogs = async (start, end) => {
    try {
      const response = await axios.get(`http://localhost:8000/posts/blogs`);
      console.log(response.data);
      // filtering the next 10 blogs from the response
      const moreBlogs = response.data.slice(start, end);
      // concating the more blogs to the blogsState  withhout updating the slice store
      setBlogsState([...blogsState, ...moreBlogs]);
    } catch (error) {
      console.log(error);
    }
  };

  // const moreWidgets = () => {
  //   for (let i; i < state; i++) {
  //     console.log("hello");
  //     return <BlogWidget></BlogWidget>;
  //   }
  //   console.log("hello false");
  // };
  const scrollHandler = () => {
    window.addEventListener("scroll", (e) => {
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.documentElement.scrollHeight
      ) {
        // calling the getMoreBlogs funtion to get more blogs from the server when the user scrolls to the end of the page
        getMoreBlogs(5, 15);
      }
    });
  };
  useEffect(() => {
    scrollHandler();
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // while the change in the state of the state-value useeffect fires the morewidgets funtion
  useEffect(() => {
    // button to load more blogsWidgets in the list
  }, [startFrom]);

  return (
    <div className=" bg-container  md:p-10">
      <section
        className="main-container text-white rounded-xl border-border  bg-primary p-8"
        id="main-contianer"
      >
        <h1>Here are all the articles realated to the content.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti
          enim nobis fugit voluptate necessitatibus explicabo delectus eveniet
          quisquam. Excepturi!
        </p>
        <section className="blogs-hero-container flex ">
          <div className="lead-blog-contianer hidden md:block">
            <div className="img-container">
              <img src="assets/right-slide-home.jpg" alt="" />
              <div className="content-description">
                <h1>Article Title</h1>
                <p className="discription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  illum corporis autem eveniet accusantium.
                </p>
                <div className="writer-details flex">
                  <div className="profile ">
                    <img
                      src="assets/logo.png"
                      className="rounded-[50%] h-6 w-6  "
                      alt="Auther-profile"
                    />
                  </div>{" "}
                  <div className="">
                    <h3>Writer name</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-container  gap-1 ">
            <select
              name="category "
              className="bg-primary border-secondary-normal hover:border-secondary-hover border-[1px] rounded-lg "
              id="category"
            >
              <option value="all">All</option>
              <option value="Technolog">Technolog</option>
              <option value="Web3">Web3</option>
            </select>
            <select
              name="sort"
              id="sort"
              className="sort-bu bg-primary border-secondary-normal hover:border-secondary-hover border-[1px] rounded-lg "
            >
              <option value="recent">Recent</option>
              <option value="Most Read">Most Read</option>
              <option value="Most Liked">Most Liked</option>
              <option value="Most Commented">Most Commented</option>
            </select>
          </div>
        </section>
        {/* mapping the blogslist from the blogstateSlice  */}
        <div className="blogs-list-container    p-5 flex-wrap ">
          {blogsState.map((blog, i) => {
            // i is the index of the blog in the blogsList array based on its blog_id
            i = blog.blog_id;
            startFrom = startFrom + 1;
            console.log(i);
            return (
              <>
                {isLoggedIn ? (
                  <Link to={`/blog/${i}`}>
                    {" "}
                    <BlogWidget key={i} blogWordLimit={30}  blog={blog}></BlogWidget>
                  </Link>
                ) : (
                  <span
                    onClick={() => {
                      return toast.error("Kindly login to see blog");
                    }}
                  >
                    <BlogWidget key={i} blogWordLimit={30} blog={blog}></BlogWidget>
                  </span>
                )}
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
