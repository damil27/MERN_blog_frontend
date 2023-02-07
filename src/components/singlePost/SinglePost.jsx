import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/Context";
import "./singlePost.css";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const { user } = useContext(Context);

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const publicFolder = "http://localhost:5000/images/";

  useEffect(() => {
    const sendRequest = async () => {
      const res = await axios
        .get("/posts/" + path)
        .catch((error) => console.log(error));
      // const data = await res.data;
      setPost(res.data.post);
      console.log(res.data.post.title);
      setTitle(res.data.post.title);
      setDescription(res.data.post.description);
    };
    sendRequest();
    // sendRequest().then((data) => setPost(data.post));
  }, [path]);
  // delete function
  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path, {
        data: { username: user.user.email },
      });
      window.location.replace("/");
    } catch (error) {}
  };
  //update function
  const handleUpdate = async () => {
    // console.log("sumitted");
    console.log(post._id);
    try {
      await axios.put(
        (`/posts/${post._id}`,
        { username: user.user.email, title, description })
      );
      setUpdateMode(false);
      console.log("submited");
    } catch (error) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={publicFolder + post.photo} alt="" />
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.user.email && (
              <div className="singlePostEdit">
                <i
                  className="fas fa-edit singlePosteditIcon"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="fa-sharp fa-solid fa-trash singlePostDeleteIcon"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
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
        {updateMode ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="singlePostDesc"
          />
        ) : (
          <p className="singlePostDesc">{post.description}</p>
        )}
        {updateMode && (
          <button type="submit" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
