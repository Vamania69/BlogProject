import React, { useEffect, useState } from "react";
import { TbBulbFilled } from "react-icons/tb";
import BlogWidget from "../shared/BlogWidgets/BlogWidget";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../features/BlogsListSlice";
import { store } from "../../ReduxStore/store";
import { toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
const Home = () => {
  async function getData() {
    await store.dispatch(fetchBlogs());
  }
  useEffect(() => {
    getData();
  }, []);
  //
  // state to hold the search value
  const [searchValue, setSearchValue] = useState("");
  // getting the store slice reducer to update the search results
  const blogsList = useSelector((state) => state.blogsList);
  console.log(blogsList.blogsList);

  useEffect(() => {
    setSearchedBlogs(blogsList.blogsList);
  }, [blogsList.blogsList]);
  const [searchedBlogs, setSearchedBlogs] = useState([]);
  // search function

  const searchHandler = () => {
    const filteredBlogs = blogsList.blogsList.filter((blog) => {
      return blog.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchedBlogs(filteredBlogs);
    console.log(searchedBlogs);
  };
  // input value handler
  const searchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };
  // to sync the input then search for the blogs realted to the keywords

  useEffect(() => {
    console.log(searchValue);
    console.log(searchedBlogs);
    // calling the search filter
    searchHandler();
  }, [searchValue]);
  console.log(blogsList);

  // selecting a random blog form te blogStore that will be renderd on the hero section
  const randomBlog = blogsList.blogsList[Math.floor(Math.random() * 10)];

  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);

  // calling the search function to get the related blogs
  console.log(searchedBlogs);
  return (
    <>
      <section
        className="  hero-section p-4 sm:p-71qw md:p-10  flex flex-col  bg-primary text-white"
        id="hero-section"
      >
        <div className="hero-heading m-10 max-w-screen-xl self-center ">
          <div>
           
            <h1 className=" mb-2 ">
              Editor's pic
              <span className="inline">
                <TbBulbFilled color="yellow" />
              </span>
            </h1>
            <p className="text-xl  text-border">
              Here is the knowledge you should gain every day !!
            </p>
          </div>
          {
            //if the random blog is fetched when the blogs are stored inside the store and then if randomBlog !== undefined then render the hero section
            randomBlog && (
              // hero section
              <section className="large-contianer slide-container mt-10  md:flex ">
                <div className="left-slide md:self-center md:w-2/5  backdrop-blur-2xl h-[100%]  border-solid border-2 border-border rounded-xl z-10 p-4 sm:p-10">
                  <h2>{randomBlog.title}</h2>
                  <p className="text-sm sm:text-base">
                    {randomBlog.content.slice(0, 100)}
                  </p>
                </div>

                <div className="right-slide md:w-4/5 mt-[-100px] md:mt-[0px] md:ml-[-100px] justify-end">
                  <div className="img-contianer  ">
                    <img
                      src={randomBlog.coverImage}
                      className="h-auto rounded-xl  w-auto"
                      alt=""
                    />
                  </div>
                </div>
              </section>
            )
          }
          <section className="blogs-container mt-20 latest-blogs-contianer">
            <div className="md:flex justify-between ">
              <div className="">
                <h1> Latest Blog's</h1>
                <h3 className="text-border py-5">
                  Discover the most outstanding articles ins all topics of life
                </h3>
              </div>
              <div className="">
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
              </div>
            </div>
            {
              // suggestion blog container with 2 parts
            }
            <div className="">
              {
                // right side of the suggestion blog container with a large widget
              }
              <div className="max-w-[50%] inline"></div>
              {
                // left side of the suggestion blog container with smaller widgets
              }

              <div className="md:grid first:row-span-2  md:grid-cols-2 gap-2">
                {
                  // mapping the blogs by passing the props to each elementComponent of a widget
                }
                {blogsList.loading ? (
                  <div>loading </div>
                ) : (
                  searchedBlogs.map((blog, i) => {
                    // i as the key for each widget based on its blog_id
                    i = blog.blog_id;
                    return (
                      <>
                        {isLoggedIn ? (
                          <Link to={`/blog/${i}`}>
                            <BlogWidget
                              blog={blog}
                              blogWordLimit={30}
                              blogTitleLimit={30}
                              key={i}
                            />
                          </Link>
                        ) : (
                          <span
                            onClick={() => {
                              return toast.error("Kindly login to see blog");
                            }}
                          >
                            <BlogWidget
                              blog={blog}
                              blogWordLimit={30}
                              blogTitleLimit={20}
                              key={i}
                            />
                          </span>
                        )}
                      </>
                    );
                  })
                )}
              </div>
            </div>
            <Link to={"/blogs"}>
              <button className="btn-secondary ">Read More</button>
            </Link>
          </section>
        </div>
        <div className="section subscribe-writer p-2 xs:p-5 sm:p-10 rounded-xl block flex-1 md:flex bg-container ">
          <div className="min-w-[50%] sm:p-5">
            <p className="text-border">SUPPER CHANGE YOUR PLANNING POWERS</p>
            <h1 className="mt-5">
              SUPPER CHANGE YOUR PLANNING POWERS Become an author and share your
              great stories
            </h1>
            <p className="text-border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem harum, dolore suscipit quaerat sit reiciendis magni
              sint quos placeat optio maxime quis labore non maiores.
            </p>
            <form action="submit" className="p-3 sm:p-5">
              <input
                type="email"
                className="block text-black border-none mb-4 sm:m-[2rem.5rem]  rounded-md p-2"
                placeholder="@ Enter your email"
              />
              <button className="btn-primary  hover:bg-secondary-hover text-xs sm:text-base mt-5">
                Register as an Author
              </button>
            </form>
          </div>
          <div className="flex">
            <img
              src="./assets/writter-illustration-1.jpg"
              className="rounded-lg  items-center"
              alt=""
            />
          </div>
        </div>
        {}
      </section>
    </>
  );
};

export default Home;
