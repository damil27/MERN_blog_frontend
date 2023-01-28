import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./singlePage.css";

const SIngle = () => {
  return (
    <div className="single">
      <Sidebar />
      <SinglePost />
    </div>
  );
};

export default SIngle;
