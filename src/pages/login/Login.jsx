import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter Email" />
        <label htmlFor="">Password </label>
        <input type="password" placeholder="Password" />
        <button className="loginSubmitBtn">Login</button>
      </form>
      <div className="register">
        <p>Create an acoount?</p>
        <button className="registerBtn">
          {" "}
          <Link className="link" to="/register">
            Register
          </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
