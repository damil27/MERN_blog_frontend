import axios from "axios";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./register.css";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleOnchange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="">User Name</label>
        <input
          type="text"
          onChange={handleOnchange}
          name="username"
          value={inputs.username}
          placeholder="Enter User name"
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={handleOnchange}
          name="email"
          value={inputs.email}
        />
        <label htmlFor="">Password </label>
        <input
          value={inputs.password}
          type="password"
          placeholder="Password"
          onChange={handleOnchange}
          name="password"
        />
        <button type="submit" className="registerSubmitBtn">
          Register
        </button>
      </form>
      <div className="login">
        <p>Already have an account?</p>
        <button className="loginBtn">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </div>
      {error && <span style={{ color: "red" }}>Something went wrong!</span>}
    </div>
  );
};

export default Register;
