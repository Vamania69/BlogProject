import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { auth } from "../../firebaseConfig/firebase";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  // creating the state to store the form details
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  // submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formDetails);

    // creating the user with email and password
    // the function takes 3 arguments and returns a promise which is resolved with the response
    createUserWithEmailAndPassword(
      auth,
      formDetails.email,
      formDetails.password
    )
      .then(async (response) => {
        // when the user is created successfully
        alert("User registered sucessfully");
        console.log(response);
        const user = response.user;
        // updating the user name which his actual name
        await updateProfile(user, { displayName: formDetails.name });
        console.log(auth.currentUser.displayName);
        // navigating to the home page
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  return (
    <div>
      <div
        id="login-container"
        className={`login-model z-20 h-[100%] text-white hover:decoration-white fixed flex justify-center w-[100%] items-center backdrop-blur-sm  md:inset-10 bg-opacity-60 left-0 top-0`}
      >
        <div
          id="inside"
          className="   justify-around login-form-container z-20 bg-container rounded-lg p-5 md:w-[50%]  "
        >
          <div className="flex justify-between">
            <h2> Register New User!!!</h2>
            <button
            onClick={()=>{navigate("/")}}
            id="login-container-2" className="p-[1px]">
              
              <RxCrossCircled id="login-container" size={"2rem"} />{" "}
            </button>
          </div>
          <div className="form-container  p-10   ">
            <form
              action="submit"
              className="login-form  flex flex-col"
              id="login-form"
              onSubmit={formSubmitHandler}
            >
              <label htmlFor="Name">Name </label>
              <input
                required
                type="text"
                name="name"
                className="text-black"
                placeholder=" Enter your full name"
                id="input-name"
                onChange={(e) =>
                  setFormDetails({ ...formDetails, name: e.target.value })
                }
              />
              <label htmlFor="Email ">Email </label>
              <input
                required
                type="email"
                name="Email"
                className="text-black"
                placeholder="Enter your full Email"
                id="input-email"
                onChange={(e) =>
                  setFormDetails({ ...formDetails, email: e.target.value })
                }
              />
              <label htmlFor="Name">Name </label>
              <input
                required
                type="password"
                name="password"
                className="text-black"
                placeholder="Enter your full password"
                id="input-password"
                onChange={(e) =>
                  setFormDetails({ ...formDetails, password: e.target.value })
                }
              />
              <p>
                {" "}
                Already have Account?{" "}
                <Link
                  to={"/home"}
                  className="text-secondary-normal hover:text-secondary-hover"
                >
                  {" "}
                  Sign In
                </Link>{" "}
              </p>
              <button
                type="submit"
                className=" bg-secondary-normal hover:bg-secondary-hover rounded-lg p-3 m-[5px.0px]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
