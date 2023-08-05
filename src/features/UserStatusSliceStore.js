import { createSlice } from "@reduxjs/toolkit";

// initail state
const initialState = {
  isLoggedIn: false,
  userDetails: {},
};

// creating the store
const currentUser = createSlice({
  name: "currentUser",
  initialState: initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      // passing the current user as the userState in the store
      state.userDetails = action.payload;
    },
    // redcuer for the logout state change
    setLoggedOut: (state, action) => {
      state.isLoggedIn = false;
      state.userDetails = {} },
  },
});

export const { setLoggedIn, setLoggedOut } = currentUser.actions;

export default currentUser.reducer;
