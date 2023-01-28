import React from "react";
import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postcat">Musick</span>
          <span className="postcat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
        </span>
        <hr />
        <span className="postDate">1 hour ego</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis libero
        distinctio asperiores veniam adipisci voluptas rem possimus accusantium
        quae sequi. Sapiente est aut commodi blanditiis voluptates distinctio
        doloribus velit voluptatum! distinctio asperiores veniam adipisci
        voluptas rem possimus accusantium quae sequi. Sapiente est aut commodi
        blanditiis voluptates distinctio doloribus velit voluptatum! distinctio
        asperiores veniam adipisci voluptas rem possimus accusantium quae sequi.
        Sapiente est aut commodi blanditiis voluptates distinctio doloribus
        velit voluptatum!
      </p>
    </div>
  );
};

export default Post;
