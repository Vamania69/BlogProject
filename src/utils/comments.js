import React, { useEffect, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
// getting the state of the comments using the useSelector hooks
// import the dispatch hook to dispatch an action

import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../features/BlogCommentsSlice";
import { toNumber } from "lodash";
import "../App.css"
const Comments = ({ comments, onDeleteComment }) => {
  // comments from the single blog page

  // state to show case the delete button if the comment belog to the user
  const currentUser = useSelector((state) => state.currentUser.userDetails);

  useEffect(() => {
    // rerender of component whenever the comments State is updated or chnaged
  }, [comments]);

  const dispatch = useDispatch();
  // delete comment handler with commentId
  const deleteHandler = (e) => {
    //dispatching the delete action with commentId as payload
    dispatch(deleteComment(parseInt(toNumber(e.target.value))));
    console.log(comments);
  };

  return (
    <div
      className="comments-container text-white  bg-primary  md:rounded-lg p-3 md:p-10 md:m-10"
      id="comment-continer"
    >
      <h2>
        Comments ({comments.length}) <AiFillMessage color="white" />{" "}
      </h2>
      <div className="comments-section">
        {
          comments.map((comment, i) => {
          // check if comment belongs to the user and set the delete button to true or false
          console.log(comment);
          console.log(comment.commentWriterId === currentUser.uid)
          return (
            <div className="comment-container mt-1 p-3 border-[1px] w-[1/2] border-border rounded-md  ">
              <h3>{comment.commentWriter}</h3>
              <p>{comment.commentContent}</p>
              {comment.commentWriterId === currentUser.uid ? (
                <button className=" btn-secondary" onClick={onDeleteComment}>Delete</button>
              ):(<></>)}
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
