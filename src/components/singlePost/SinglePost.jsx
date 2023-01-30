import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const sendRequest = async () => {
    const res = await axios
      .get("/posts/" + path)
      .catch((error) => console.log(error));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setPost(data.post));
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post.photo} alt="" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="fas fa-edit singlePosteditIcon"></i>
            <i className="fa-sharp fa-solid fa-trash singlePostDeleteIcon"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              {post.username}
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.description}</p>
      </div>
    </div>
  );
};

export default SinglePost;
