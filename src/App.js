import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import BlogPage from "./components/BlogPage/BlogsPage";
import SingleBlog from "./components/SingleBlogPage/SingleBlog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import React, { useEffect, useState } from "react";
import userProfile from "./components/userProfile/UserProfile";
import PageNotFound from "./components/shared/pageNotFound";
import Navbar from "./components/shared/navbar/navbar";
import Footer from "./components/shared/Footer/footer";
import "./App.css";
import Comments from "./utils/comments";
import { auth } from "./firebaseConfig/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setLoggedOut } from "./features/UserStatusSliceStore";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
function App() {
  // getting the dispatch function from the store to update the userSlice
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(auth.currentUser);
    // middleware observer that chaecks if the user is logged in or not
    auth.onAuthStateChanged(() => {
      const user = auth.currentUser;
      console.log(user);
      if (!!user) {
        // set the user status and user state to the userSlice
        dispatch(setLoggedIn(user));
        console.log("user is logged in and user is set to the store");
      } else {
        // set the user status and user state to the userSlice
        dispatch(setLoggedOut());
        console.log("user is logged out and user is set to the store");
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:blogId" element={<SingleBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/user/:userId"
            element={
              <ProtectedRoutes isLoggedIn={true} component={userProfile} />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
