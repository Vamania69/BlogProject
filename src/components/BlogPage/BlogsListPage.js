import React from "react";
import SingleBlogContainer from "../shared/singleBlogContainer/singleBlogContainer";
import "./BlogPage.css";
function BlogPage() {
  return (
    <div className="bg-container  md:p-10">
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

        <div className="blogs-list-container   p-5 flex-wrap lg:flex">
          <SingleBlogContainer />
          <SingleBlogContainer />
          <SingleBlogContainer />
          <SingleBlogContainer />
          <SingleBlogContainer />
          <SingleBlogContainer />
          <SingleBlogContainer />
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
