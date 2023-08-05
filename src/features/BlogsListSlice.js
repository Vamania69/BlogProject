// import React from "react";
// import { createSlice } from "@reduxjs/toolkit";
// import articleContent from "../utils/articleList";
// import axios from "axios";
// import { useState } from "react";
// import { set } from "lodash";
// // impot React


// // async function to get blogs
// const getBlogs = async () => {
//   const [initialState, setInitialState] = useState({
//     blogsList: [],
//     loading: false,
//   });
// try{
//   setInitialState({ ...initialState, loading: true });
//   const response= await axios.get(`http://localhost:8000/posts/blogs`);
//   console.log(response);
//   setInitialState({ ...initialState, blogsList: response.data, loading: false });
// }
// catch(error){
//   console.log(error.message);

// }
// }
// export default getBlogs;




// const blogsListSlice = createSlice({
//   name: "blogs",
//   initialState :initialState,
//   reducers: {
//     addBlog: (state, action) => {
//       state.push(action.payload);
//     },
//   },
// });
// export const { addBlog } = blogsListSlice.actions;

// export default blogsListSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogsList: [],
  loading: false,
};

// Async function to fetch blogs
export const fetchBlogs = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.get("http://localhost:8000/posts/blogs");
    console.log(response)
    dispatch(setBlogs(response.data));
  } catch (error) {
    console.error(error.message);
  }

  dispatch(setLoading(false));
};


const blogsListSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogsList.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setBlogs: (state, action) => {
      state.blogsList = action.payload;
    },
  },
});

// actions creators 

export const { addBlog, setLoading, setBlogs } = blogsListSlice.actions;
export default blogsListSlice.reducer;
