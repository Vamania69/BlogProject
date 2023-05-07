import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import BlogPage from "./components/BlogPage/BlogsListPage";
import SingleBlog from "./components/SingleBlogPage/SingleBlog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import { useEffect } from "react";
import userProfile from "./components/userProfile/UserProfile";
import PageNotFound from "./components/shared/pageNotFound";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import "./App.css";
const App = () => {
  // const [isLoggedIn, SetLoggedIn] = useState(true);

  useEffect(() => {}, []);
  // <Route
  //           path="/user"
  //           element={<ProtectedRoutes component={UserProfile} />}
  //         />
  return (
    <div className="App">
      <Router>
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
};
export default App;
