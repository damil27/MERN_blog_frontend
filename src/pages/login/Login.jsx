import axios from "axios";
import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../components/context/Context";
import "./login.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input ref={userRef} type="email" placeholder="Enter Username..." />
        <label htmlFor="">Password </label>
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" className="loginSubmitBtn" disabled={isFetching}>
          Login
        </button>
      </form>
      <div className="register">
        <p>Create an acoount?</p>
        <Link className="link" to="/register">
          <button type="submit" className="registerBtn">
            {" "}
            Register
          </button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Login;
