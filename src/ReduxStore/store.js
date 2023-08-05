import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../features/BlogCommentsSlice";
import blogsListReducer from "../features/BlogsListSlice";
import currentUserReducer from "../features/UserStatusSliceStore";
// after writing the createSlice states or each and defining there reducers and acitonCreatores
// passing them to the reducers object
// import { addComment } from "../features/BlogCommentsSlice";
console.log(blogsListReducer);
if (!commentsReducer) commentsReducer = null;
if (!blogsListReducer) blogsListReducer = null;
if (!currentUserReducer) currentUserReducer = null;
// state: corresponding reducer for the state slice
export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    blogsList: blogsListReducer,
    currentUser: currentUserReducer,
  },
});
