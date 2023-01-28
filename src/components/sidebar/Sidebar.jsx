import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Marketing</li>
          <li className="sidebarListItem">Education</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Folow us</span>
        <div className=" ">
          <i className="fab fa-facebook-square Icon"></i>
          <i className="fab fa-twitter-square Icon"></i>
          <i className="fab fa-instagram-square Icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
