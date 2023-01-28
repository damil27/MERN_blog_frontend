import React from "react";
import "./write.css";
const Write = () => {
  return (
    <div className="write">
      <img src="" className="writeImg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput" className="writeIcon">
            +{" "}
          </label>
          <input type="file" id="fileInput" hidden />
          <input
            type="text"
            className="writeInput"
            placeholder="Title"
            autoFocus
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="write your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeButton"> Publish</button>
      </form>
    </div>
  );
};

export default Write;
