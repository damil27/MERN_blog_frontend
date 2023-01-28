import React from "react";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fab fa-facebook-square topIcon"></i>
        <i className="fab fa-twitter-square topIcon"></i>
        <i className="fab fa-instagram-square topIcon"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItems">Home</li>
          <li className="topListItems">About</li>
          <li className="topListItems">Write</li>
          <li className="topListItems">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://avatars.githubusercontent.com/u/34189426?s=40&v=4"
          alt="profile-picture"
        />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
