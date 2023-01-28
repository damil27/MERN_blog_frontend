import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
          <div className="singlePostEdit">
            <i className="fas fa-edit singlePosteditIcon"></i>
            <i className="fa-sharp fa-solid fa-trash singlePostDeleteIcon"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: Damilare</span>
          <span className="singlePostDate">1 hour ego</span>
        </div>
        <p className="singlePostDesc">
          jorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor facere
          quaerat reprehenderit eius! Incidunt perferendis vitae soluta. Eum rem
          quam porro molestiae reprehenderit inventore itaque maxime iure,
          voluptas maiores aliquam nesciunt placeat temporibus mollitia,
          perferendis saepe ex rerum non possimus. Ratione reprehenderit totam
          earum sit nobis aut sunt necessitatibus magni eos, unde quisquam fugit
          voluptatum error harum voluptas, soluta nostrum impedit maiores! Iste
          in, veniam aliquam nisi assumenda repellendus recusandae at? Nihil,
          rerum perspiciatis pariatur illum harum explicabo aut dicta expedita
          similique dolor. Rem placeat cum assumenda facilis blanditiis adipisci
          ex cupiditate omnis, in ipsa beatae? Ut libero cupiditate iste!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
