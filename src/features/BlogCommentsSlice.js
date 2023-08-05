import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    commentId: 999,
    blogId: 1,
    commentWriter: "varun",
    commentContent: "this is a very good post",
  },
  {
    commentId: 998,
    blogId: 1,
    commentWriter: "Bunty",
    commentContent: "this comment is by bunty",
  },
  {
    commentId: 997,
    blogId: 3,
    commentWriter: "ashi",
    commentContent: "this comment is by ashi",
  },
];

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.push(action.payload);
    },
    deleteComment: (state, action) => {
      console.log(action.payload);
      return state.filter((comment) => comment.commentId !== action.payload);
    },
  },
});

console.log(commentsSlice.reducer);
// export the addcomment reducer which also creates addcomment action creator by defalut to same name of reducer
export const { addComment, deleteComment } = commentsSlice.actions;
//
console.log(commentsSlice);
// if (!commentsSlice.reducer.state) commentsSlice.reducer.state = initalState;
export default commentsSlice.reducer;
