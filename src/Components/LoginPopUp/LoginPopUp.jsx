import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../Assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  let [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "SignUp" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & Privacy Policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new Account? <span onClick={()=>{setCurrentState("SignUp")}}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account <span onClick={()=>{setCurrentState("Login")}}>Sign In</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
