import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
const Register = () => {
  return (
    <div className="register">
      <form className="registerForm">
        <label htmlFor="">User Name</label>
        <input type="text" placeholder="Enter User name" />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter Email" />
        <label htmlFor="">Password </label>
        <input type="password" placeholder="Password" />
        <button className="registerSubmitBtn">Register</button>
      </form>
      <div className="login">
        <p>Already have an account?</p>
        <button className="loginBtn">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Register;
