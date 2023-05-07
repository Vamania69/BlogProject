import React from 'react'
import "./Login.css"
import { RxCrossCircled } from 'react-icons/rx'
function Login({ visible, onClose }) {
    console.log(onClose)
    const closeLoginHandler = (e) => {
        //  if(e.tager)
        console.log(e.target.id === "login-container")
        if (e.target.id === "login-container" || e.target.id === "login-container-2") onClose()
    }

    if (!visible) return null
    return (
        <div>
            <div id='login-container' onClick={closeLoginHandler} className={`login-model z-20 h-[100%]  hover:decoration-white fixed flex justify-center w-[100%] items-center backdrop-blur-sm  md:inset-10 bg-opacity-60 left-0 top-0`}>
                <div id='inside' className="  justify-end justify-around login-form-container z-20 bg-container rounded-lg p-5 md:w-[50%]  ">
                    <div className="flex justify-between">
                        <h2>Sign In </h2>
                        <button id='login-container-2' className="p-[1px]" onClick={closeLoginHandler}> <RxCrossCircled id='login-container' size={"2rem"} /> </button>
                    </div>
                    <div className="form-container  p-10   ">
                        <form action="submit" className="login-form flex flex-col" id="login-form">
                            <label htmlFor="Name">Name </label>
                            <input required type="text" name="name" placeholder=" Enter your full name" id="input-name" />
                            <label htmlFor="Email ">Email   </label>
                            <input required type="email" name="Email" placeholder='Enter your full Email' id="input-email" />
                            <label htmlFor="Name">Name </label>
                            <input required type="password" name="password" placeholder='Enter your full password' id="input-password" />

                            <button type="submit" className=" bg-secondary-normal hover:bg-secondary-hover rounded-lg p-3 m-[5px.0px]">Login</button>
                        </form>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Login