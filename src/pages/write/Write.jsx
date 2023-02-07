import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../components/context/Context";
import "./write.css";
const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useContext(Context);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.user.email,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const resp = await axios.post("/posts", newPost);
      window.location.replace("/post/" + resp.data.savedPost._id);
      // console.log(resp.data.savedPost);
    } catch (error) {
      // console.log(error);
    }
    // console.log(newPost);
  };

  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} className="writeImg" alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput" className="writeIcon">
            +{" "}
          </label>
          <input
            type="file"
            id="fileInput"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            className="writeInput"
            placeholder="Title"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="write your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="writeButton">
          {" "}
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
