import React, { useState, useEffect } from "react";
import Header from "../../components/heroheader/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import axios from "axios";
import "./home.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // console.log(location);

  const sendRequest = async () => {
    const res = await axios
      .get("/posts" + search)
      .catch((error) => console.log(error));
    const data = res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setPosts(data));
  }, [search]);
  // console.log(posts);
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Home;
