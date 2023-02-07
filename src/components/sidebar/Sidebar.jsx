import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  const sendRequest = async () => {
    const res = await axios
      .get("/categories")
      .catch((error) => console.log(error));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setCats(data));
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((cat, index) => (
            <Link key={index} className="link" to={`/?categories=${cat.name}`}>
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
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
