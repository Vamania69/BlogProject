import React, { useEffect, useState } from "react";
import "./BlogPage.css";
import { forEach, set } from "lodash";
import BlogWidget from "../shared/BlogWidgets/BlogWidget";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { store } from "../../ReduxStore/store";
import { fetchBlogs } from "../../features/BlogsListSlice";
import { FiSearch } from "react-icons/fi";

// import the search funtion from the searchComponent
import UseSearchcomponent from "../shared/searchComponent/searchComponent";
import { baseUrl } from "../../utils/url_export";

function BlogPage() {
  async function getData() {
    await store.dispatch(fetchBlogs());
    // searchHandler()
  }
  useEffect(() => {
    // set the initial state of the blogs
    getData();
    console.log(blogsList);
  }, []);
  const { searchValue, setSearchValue, searchedBlogs, searchHandler } =
    UseSearchcomponent();
  // get the inital blog state from the store
  const [blogsState, setBlogsState] = useState(searchedBlogs);
  const blogsList = useSelector((state) => state.blogsList);

  // handle the search value onchnage
  const searchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  useEffect(() => {
    console.log(searchedBlogs);
    setBlogsState(searchedBlogs);
  }, [searchedBlogs]);

  // get the user login state from the store
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
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
      const response = await axios.get(`${baseUrl}/blogs`);
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

  // select handler
  const [categoryValue, setCategoryValue] = useState("all");
  const categorySelectHandler = () => {
    categoryValue === "all"
      ? setBlogsState(searchedBlogs)
      : setBlogsState(
          searchedBlogs.filter((blog) => blog.category === categoryValue)
        );
  };
  useEffect(() => {
    categorySelectHandler();
  }, [categoryValue]);

  return (
    <div className=" bg-container  md:p-10">
      <section
        className="main-container text-white rounded-xl border-border  bg-primary p-8"
        id="main-contianer"
      >
        <section className="blogs-hero-container block md:flex ">
          <div className="lead-blog-contianer block md:block">
            <h1 className="py-4">Discover Captivating Tales: Journey Through Our Enchanting Blogosphere!</h1>
            <p className="py-3">
            Delve into an Inspiring Odyssey of Stories, Wisdom, and Adventure in Our Captivating Blogosphere. Explore Boundless Horizons and Ignite Your Imagination Today!
            </p>
            <div className="img-container border-border rounded-lg border-2 p-3">
              <img src="assets/right-slide-home.jpg" alt="Image" />
              <div className="content-description py-3">
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
          <div className="flex flex-col justify-end items-center md:items-end">
            <h3 className="text-border p-5">
              Get More filterd and precise content !!
            </h3>
            <div className=" filter-container flex flex-col justify-center gap-1  m-4">
              <form action="" className=" flex  ">
                <input
                  type="search"
                  name="search"
                  placeholder="Search blogs"
                  id="search"
                  value={searchValue}
                  onChange={searchValueHandler}
                  className="b-none rounded-md text-black p-1   flex "
                />
                <span className="bg-container  items-center cursor-pointer  p-2">
                  <FiSearch />
                </span>
              </form>
              <select
                onChange={(e) => setCategoryValue(e.target.value)}
                name="category "
                className="bg-primary w-[50%] m-5 text-center p-1  border-secondary-normal hover:border-secondary-hover border-[1px] rounded-lg "
                id="category"
              >
                <option value="all">All</option>
                <option value="Development">Development</option>
                <option value="Soft-Skills">Soft-Skills</option>
                <option value="Artificial-Intelligence">
                  Artificial-Intelligence
                </option>
                <option value="Blockchain">Blockchain</option>
              </select>
            </div>

            {
              // <select
              //   name="sort"
              //   id="sort"
              //   className="sort-bu bg-primary border-secondary-normal hover:border-secondary-hover border-[1px] rounded-lg "
              // >
              //   <option value="recent">Recent</option>
              //   <option value="Most Read">Most Read</option>
              //   <option value="Most Liked">Most Liked</option>
              //   <option value="Most Commented">Most Commented</option>
              //</div></select>
            }
          </div>
        </section>
        {/* mapping the blogslist from the blogstateSlice  */}
        <div className="blogs-list-container    p-2 flex-wrap ">
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
                    <BlogWidget
                      key={i}
                      blogWordLimit={30}
                      blog={blog}
                    ></BlogWidget>
                  </Link>
                ) : (
                  <span
                    onClick={() => {
                      return toast.error("Kindly login to see blog");
                    }}
                  >
                    <BlogWidget
                      key={i}
                      blogWordLimit={30}
                      blog={blog}
                    ></BlogWidget>
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
