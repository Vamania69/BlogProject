import { Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import BlogPage from "./components/BlogPage/BlogPage";
import SingleBlog from "./components/SingleBlogPage/SingleBlog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserProfile from "./components/userProfile/UserProfile";
import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import { useEffect, useState } from "react";
import userProfile from "./components/userProfile/UserProfile";
const App = () => {
  const [isLoggedIn, SetLoggedIn] = useState(true);

  useEffect(() => {}, []);
  // <Route
  //           path="/user"
  //           element={<ProtectedRoutes component={UserProfile} />}
  //         />
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blo1gId" element={<SingleBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/user/*"
            element={
              <ProtectedRoutes
                isLoggedIn={isLoggedIn}
                component={userProfile}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
