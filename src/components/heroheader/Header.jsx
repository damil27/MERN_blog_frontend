import React from "react";
import "./header.css";
import hero from "./hero.jpg";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTItle">
        <span className="headerTitleItem">Blog</span>
      </div>
      <img className="headerImg" src={hero} alt="" />
    </div>
  );
};

export default Header;
