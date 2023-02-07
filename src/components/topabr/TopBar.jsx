import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./topbar.css";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="fab fa-facebook-square topIcon"></i>
        <i className="fab fa-twitter-square topIcon"></i>
        <i className="fab fa-instagram-square topIcon"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItems">
            <Link className="link" to="/">
              Home
            </Link>{" "}
          </li>
          <li className="topListItems">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topListItems">
            {" "}
            <Link className="link" to="/write">
              Write
            </Link>{" "}
          </li>
          {user && (
            <li onClick={handleLogout} className="topListItems">
              Logout
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <Link to="/settings">
              <img
                className="topImg"
                src={user.user.profilePic}
                alt="profile-picture"
              />
            </Link>
            <i className="fas fa-search"></i> :
          </>
        ) : (
          <div className="account">
            <Link className="link topLogin" to="/login">
              Login
            </Link>{" "}
            <Link className="link" to="/register">
              Register
            </Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
