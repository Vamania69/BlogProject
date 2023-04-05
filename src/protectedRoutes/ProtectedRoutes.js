import { rest } from "lodash";
import React, { useEffect, useState } from "react";
import UserProfile from "../components/userProfile/UserProfile";
import {
  Navigate,
  Navigator,
  Redirect,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const ProtectedRoutes = ({ component: Component, isLoggedIn: isLoggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isLoggedIn);
    console.log(Component);
  }, []);

  return (
    <Routes>
      <Route
        render={(props) => {
          if (isLoggedIn) {
            return (
              <Route {...rest} render={(props) => <UserProfile {...props} />} />
            );
          } else {
            navigate("/", { replace: true });
            return null;
          }
        }}
      />
    </Routes>
  );
};

export default ProtectedRoutes;
