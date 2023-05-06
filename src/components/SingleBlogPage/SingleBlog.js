import React from "react";
import { useParams } from "react-router";
// import BlogsList from "../shared/blogsList";
import articleContent from "../../utils/articleList";
import PageNotFound from "../shared/pageNotFound";
function SingleBlog() {
  const params = useParams();
  // const blogId = params.blogId;
  console.log(params.blogId);
  console.log(articleContent.find((b) => b.articleId === 3));

  const blog = articleContent.find((b) => b.articleId === 3);
  if (!blog) {
    return <PageNotFound />;
  }
  return (
    <>
      <h2 className="blog-title m-3 text-center">{blog.title}</h2>
      <div className="blog-content m-3 p-5 border-b-4 border-indigo-500 ">
        {blog.content}
      </div>
    </>
  );
}

export default SingleBlog;
