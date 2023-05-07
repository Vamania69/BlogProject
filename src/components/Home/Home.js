import React from "react";
import { TbBulbFilled } from "react-icons/tb";
import SingleBlogContainer from "../shared/singleBlogContainer/singleBlogContainer";
import SingleBlogFull from "../shared/singleBlogContainer/singleBlogFull";
const Home = () => {
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

          <section className="large-contianer slide-container mt-10  md:flex ">
            <div className="left-slide md:self-center md:w-2/5  backdrop-blur-2xl h-[100%]  border-solid border-2 border-border rounded-xl z-20  md:w-1/3 p-10">
              <h1>hello every one</h1>
              <p className="">
                Lorem ipsum dolor, sit dignissimos magnam exercitationem autem,
                provident velit voluptatem a ut iste molestias voluptatum vitae
                eaque. Doloribus at libero vel minus amet nihil necessitatibus
                nulla, esse, ratione similique dicta aut? Sequi, ullam.
              </p>
            </div>
            <div className="right-slide md:w-4/5 mt-[-100px] md:mt-[0px] md:ml-[-100px] justify-end">
              <div className="img-contianer  ">
                <img
                  src="./assets/right-slide-home.jpg "
                  className="h-[500px] rounded-xl  w-auto"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section className="blogs-container mt-20 latest-blogs-contianer">
            <h1> Latest Blog's</h1>
            <h3 className="text-border">
              Discover the most outstanding articles ins all topics of life
            </h3>
            <div className="md:flex">
              <div className="min-w-[50%]">
                <SingleBlogContainer />
                <SingleBlogContainer />
                <SingleBlogContainer />
              </div>
              <div className=" right-latest-blog ">
                <SingleBlogFull />
              </div>
            </div>
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
      </section>
    </>
  );
};

export default Home;
