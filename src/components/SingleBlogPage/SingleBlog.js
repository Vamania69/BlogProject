import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PageNotFound from "../shared/pageNotFound";
import axios from "axios";
import Comments from "../../utils/comments";
import AddCommentForm from "../../utils/addCommentForm";
// import isLoggedIn from "../../App";
import { toast } from "react-toastify";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { FcLikePlaceholder } from "react-icons/fc";
import { BiMessageDetail } from "react-icons/bi";
import "./SingleBlogPage.css"
import { baseUrl } from "../../utils/url_export";
function SingleBlog() {
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();
  const blogId = params.blogId;
  // get the login status of the user form the userloginSlice
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser);
  console.log(blogId);

  // useNavigate to redirect to the home page
  const navigate = useNavigate();
  // we will use multiple async functions to get the comments and blogs from the backend
  useEffect(() => {
    if (currentUser.isLoggedIn) {
      const getBlogById = async () => {
        try {
          // blog details
          const blogResponse = await axios.get(
            `${baseUrl}/blog/${blogId}`
          );
          console.log(blogResponse);
          setBlog(blogResponse.data[0]);
          // comments details as array of objects
          const commentsResponse = await axios.get(
            `${baseUrl}/blog/${blogId}/comments`
          );
          console.log(commentsResponse);
          setComments(commentsResponse.data);
        } catch (error) {
          // if error occurs then it will be catched here
          console.log(error);
        }
      };

      // calling multiple async functions
      getBlogById();
    } else {
      toast.error("Please Login to view the blog ");
      navigate("/");
    }
  }, [blogId]);

  //   const blogsList = useSelector((state) => state.blogsList.blogsList);

  //   //gettig the comments and likes from the backend and updating the blogstate

  //   const blogsDetails = async () => {
  //     try {
  //       // const response = await axios.get(`http://localhost:8000/posts/blog/${params.blogId}`);
  //       const response = await axios.get(`http://localhost:8000/posts/blog/${params.blogId}/comments`);

  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error)
  //     }

  //   }
  //   useEffect(() => {
  // blogsDetails()
  //  }, [])
  //   // const blogId = params.blogId;
  //   //getting the single blog filtered from array of blogs based on id by params
  //   console.log(params.blogId);
  //   console.log(toString(articleContent[0].articleId));

  //   const blog = blogsList.find(
  //     (b) => toString(b.blog_id) === params.blogId
  //   );

  //   console.log(blog);
  if (!blog) {
    return <PageNotFound />;
  }

  // add comment function and updating the state of the comments
  const onAddComment = (comment) => {
    // updating the local state of the comments
    console.log(comment);
    console.log(comments);

    // call an async function to update the comments in the database
    const addComment = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8000/posts/blog/${blogId}/addComment`,
          comment
        );
        console.log(response.data);
        // after getting the response from the backend we will update the state of the comments
        setComments([...comments, comment]);

        return toast.success("Comment added successfully");
      } catch (error) {
        console.log(error);
        return alert("Error in adding the comment", { error });
      }
    };
    addComment();
  };
  // updating the comment state on OnDeleteComment event

  const onDeleteComment = (singleComment) => {
    const deleteComment = async () => {
      // async function to delete the comment from the backend
      try {
        const response = await axios.delete(
          `http://localhost:8000/posts/blog/${blogId}/deleteComment/${singleComment.target.value}`
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    deleteComment();
    console.log(singleComment.target.value);

    // updating the state of the comments
    setComments(
      comments.filter(
        (comment) => comment.commentId !== parseInt(singleComment.target.value)
      )
    );
  };

  return (
    <>
      <div class="rounded-lg bg-white shadow-3xl md:p-6 p-4 m-5">
        <div className="blog-intro-container md:max-w-[80%] md:flex  m-auto justify-between">
          {
            // blog left container
          }
          <div className="intro-left-container max-w-[50%]">
            <div className={`category category-${blog.category}`}>{blog.category}</div>
            <h1 className="m-2">{blog.title}</h1>
            <div className="writer-container border border-gray-300 rounded-lg">
            <div class=" p-2 items-center flex ">
            <img
            src="https://thumbs.dreamstime.com/z/beautiful-female-writer-portrait-caucasian-woman-writing-book-her-desk-laptop-117750209.jpg?w=992"
            alt="Profile Picture"
            class="w-10 h-10 rounded-full object-cover"
            />
            <p class="ml-2  text-gray-700">{blog.writer}</p>
            </div>
            <div className="blog-impression flex pl-2 text-white">
          <button className="blog-like bg-container p-[.25rem.5rem] p m-2 rounded-xl hover:bg-primary">
           {blog.likes} <FcLikePlaceholder />
          </button>
          <button className="blog-comment bg-container p-[.25rem.5rem] m-2 rounded-xl hover:bg-primary">
            <BiMessageDetail /> 4
          </button>
        </div>   
            </div>
          </div>
          {
            // blog left container
          }
          <div className="intro-right-container m-2 flex flex-col  ">
            <img
              src={blog.coverImage}
              alt="image"
              className="justify-center h-[100%] w-[100%] items-center max-h-[400px]"
            />
          </div>
        </div>
        <div className="blog-content m-3 p-5 border-b-4 border-indigo-500 ">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </div>
      <AddCommentForm
        blogId={blogId}
        onAddComment={onAddComment}
        setCommentsState={setComments}
      />
      <Comments comments={comments} onDeleteComment={onDeleteComment} />
    </>
  );
}

export default SingleBlog;
