import React from "react";
import "./Login.css";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// onClick is the function that hides the login form
function Login({ visible, onClose, setVisible }) {
  // state to hold the form details
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  console.log(onClose);
  // close the login form handle
  const closeLoginHandler = (e) => {
    //  checking wheather user click on the close button or outside the form
    if (
      e.target.id === "login-container" ||
      e.target.id === "login-container-2"
    )
      onClose();
  };

  // submit the login form handler that will authenticate the user details
  const loginSubmitHandler = (e) => {
    console.log(loginDetails);
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // on sucessful login close the login form by setting the visible to false
        setVisible(false);
        console.log("Sucessfully Logged In ", user.displayName);
        toast.success(`Welcome ${user.displayName}`);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  if (!visible) return null;
  return (
    <div>
      <div
        id="login-container"
        onClick={closeLoginHandler}
        className={`login-model z-20 h-[100%]  hover:decoration-white fixed flex justify-center w-[100%] items-center backdrop-blur-sm  md:inset-10 bg-opacity-60 left-0 top-0`}
      >
        <div
          id="inside"
          className="   justify-around login-form-container z-20 bg-container rounded-lg p-5 md:w-[50%]  "
        >
          <div className="flex justify-between">
            <h2>Sign In </h2>
            <button
              id="login-container-2"
              className="p-[1px]"
              onClick={closeLoginHandler}
            >
              {" "}
              <RxCrossCircled id="login-container" size={"2rem"} />{" "}
            </button>
          </div>
          <div className="form-container  p-10   ">
            <form
              action="submit"
              className="login-form flex flex-col"
              id="login-form"
            >
              <label htmlFor="Email ">Email </label>
              <input
                className="text-black"
                required
                type="email"
                name="Email"
                onChange={(
                  e // setting the value of the input
                ) => {
                  e.preventDefault();
                  setLoginDetails({ ...loginDetails, email: e.target.value });
                }}
                placeholder="Enter your full Email"
                id="input-email"
              />
              <label htmlFor="Name">Name </label>
              <input
                className="text-black"
                required
                type="password"
                name="password"
                onChange={(e) => {
                  e.preventDefault();
                  // setting the value of the input
                  setLoginDetails({
                    ...loginDetails,
                    password: e.target.value,
                  });
                }}
                placeholder="Enter your full password"
                id="input-password"
              />

              <button
                // function to call submit handler
                onClick={loginSubmitHandler}
                type="submit"
                className=" bg-secondary-normal hover:bg-secondary-hover rounded-lg p-3 m-[5px.0px]"
              >
                Login
              </button>
              <p>
                Don't have account?{" "}
                <Link
                  to="/register"
                  className="text-secondary-normal hover:text-secondary-hover"
                >
                  Create One!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
