import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment as addCommentDispatch } from "../features/BlogCommentsSlice";
import { set } from "lodash";
import axios from "axios";
import { useSelector } from "react-redux";
const AddCommentForm = ({ blogId , onAddComment}) => {
  const currentUser = useSelector((state)=> state.currentUser.userDetails)
  // state of comment as a object that hold value of inputs
  const [addComment, setAddComment] = useState({
    commentId: null,
    blogId: parseInt(blogId),
    commentWriter: "",
    commentContent: "",
  });
  //onChange event handler htmlFor input

  const handleInputChange = (e) => {
    e.preventDefault();
    let { value, name } = e.target;
    //check if the input is number then convert its string into no {htmlFor blogId}
    if (name === "blogId") {
      value = parseInt(value);
    }
    setAddComment({ ...addComment, [name]: value });
  };

  //submit handler with random blog id to comment
  const submitHandler = (e) => {
    e.preventDefault();
    const comment = {
      ...addComment,
      commentId: Math.floor(Math.random() * 1000),
      commentWriterId: currentUser.uid,
    };
    console.log(comment);
    // firing the addComment action with the comment values as parameter into the blogController slice
    onAddComment(comment);

    
    //dispatching the action addComment and passing the payload to the store so that it can be updated
    // dispatch(addCommentDispatch(comment));
  };
  return (
    <div className="comment-form bg-container text-white ">
      <section className="bg-container dark:bg-gray-900 py-8 lg:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-border dark:text-white">
              Discussion (20)
            </h2>
          </div>    
          <form onSubmit={submitHandler} className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-border dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                name="commentContent"
                onChange={handleInputChange}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-border dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your Name
              </label>
              <input
                id="comment"
                rows="6"
                name="commentWriter"
                onChange={handleInputChange}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write Your Name..."
                required
              ></input>
            </div>
            {
              //<div
              //     className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-border dark:bg-gray-800 dark:border-gray-700">
              //     <label htmlFor="blogId" className="sr-only">Input htmlFor which blog</label>
              //     <input id="comment" rows="6"
              //         name="blogId"
              //         type="number"
              //         onChange={handleInputChange}
              //         className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              //         placeholder="Write blog Id..." required></input>
              // </div>
            }
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center  btn-primary  focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 "
            >
              Post
            </button>
          </form>
        </div>
      </section>

      {
        // <form
        //     action="submit"
        //     onSubmit={submitHandler}
        //     className="add-comment flex-col text-center items-center"
        //
        //     <label htmlFor="writer-name ">
        //         Your Name
        //         <input
        //             className="bg-primary p-2 rounded-md block"
        //             required
        //             onChange={handleInputChange}
        //             type="text"
        //             placeholder="enter your name"
        //         /
        //     </label>
        //     <label htmlFor="comment-htmlFor-blog">
        //         blog id
        //         <input
        //             className="bg-primary p-2 rounded-md block"
        //             required
        //             onChange={handleInputChange}
        //             type="number"
        //             placeholder="enter htmlFor which blog it is"
        //         /
        //     </label>
        //     <label htmlFor="comment-content">
        //         Comment
        //         <textarea
        //             className="bg-primary p-2 rounded-md block"
        //             required
        //             onChange={handleInputChange}
        //             type="text"
        //             placeholder="enter somthing"
        //         /
        //     </label>
        //     <button type="submit">submit</button>
        // </form>
      }
    </div>
  );
};

export default AddCommentForm;
