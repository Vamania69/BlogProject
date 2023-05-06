import React from "react";
import articleContent from "../../utils/articleList";
import BlogsList from "../shared/blogsList";

function BlogPage() {
  return <BlogsList blogsList={articleContent} />;
}

export default BlogPage;
