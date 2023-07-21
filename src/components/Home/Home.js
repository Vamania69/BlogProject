import React, { useEffect} from "react";
import { TbBulbFilled } from "react-icons/tb";
import BlogWidget from "../shared/BlogWidgets/BlogWidget";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../features/BlogsListSlice";
import { store } from "../../ReduxStore/store";
import { toast } from "react-toastify";
const Home = () => {
  async function getData() {
    await store.dispatch(fetchBlogs());
  }
  useEffect(() => {
    getData();
  }, []);

  // useEffect = () => {
  //   // const [currentBlog, setCurrentBlog] = useState({});
  //   // here we will write an async function to render some random blog as object and set it to the currentBlog state

  //   // getData();

  // };
  const blogsList = useSelector((state) => state.blogsList);

  console.log(blogsList);

  //this is a widegt of a blog that render as a random suggestion

  //state that will hold the article and update if needed
  // const getData = async () => {
  //   try {

  //     // async function to get blogs
  //     const response = await axios.get(`http://localhost:8000/posts/blogs`);
  //     console.log(response);

  //   } catch (error) {
  //     console.log(error.message);
  //   }

  // };

  // selecting a random blog form te blogStore that will be renderd on the hero section
  const randomBlog = blogsList.blogsList[Math.floor(Math.random() * 10)];

  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  return (
    <>
      <section
        className="  hero-section md:p-10  flex flex-col  bg-primary text-white"
        id="hero-section"
      >
        <div className="hero-heading m-10 max-w-screen-xl self-center ">
          <h1 className=" mb-2 ">
            Editor's pic
            <span className="inline">
              <TbBulbFilled color="yellow" />
            </span>
          </h1>
          <p className="text-xl  text-border">
            Here is the knowledge you should gain every day !!
          </p>
          {
            //if the random blog is fetched when the blogs are stored inside the store and then if randomBlog !== undefined then render the hero section
            randomBlog && (
              // hero section
              <section className="large-contianer slide-container mt-10  md:flex ">
                <div className="left-slide md:self-center md:w-2/5  backdrop-blur-2xl h-[100%]  border-solid border-2 border-border rounded-xl z-10 p-10">
                  <h1>{randomBlog.title}</h1>
                  <p className="">{randomBlog.content.slice(0, 100)}</p>
                </div>

                <div className="right-slide md:w-4/5 mt-[-100px] md:mt-[0px] md:ml-[-100px] justify-end">
                  <div className="img-contianer  ">
                    <img
                      src={randomBlog.coverImage}
                      className="h-[500px] rounded-xl  w-auto"
                      alt=""
                    />
                  </div>
                </div>
              </section>
            )
          }
          <section className="blogs-container mt-20 latest-blogs-contianer">
            <h1> Latest Blog's</h1>
            <h3 className="text-border">
              Discover the most outstanding articles ins all topics of life
            </h3>

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
                  blogsList.blogsList.map((blog, i) => {
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
        <div className="section subscribe-writer p-10 rounded-xl block flex-1 md:flex bg-container ">
          <div className="min-w-[50%] p-5">
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
            <form action="submit">
              <input
                type="email"
                className="block text-black border-none m-[2rem.5rem] rounded-md p-2"
                placeholder="@ Enter your email"
              />
              <button className="btn-primary mt-1 hover:bg-secondary-hover">
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
