import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../components/context/Context";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
const Settings = () => {
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user.user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.put("/auth/" + user.user._id, updatedUser);
      setMessage(true);
      console.log(updatedUser);
    } catch (error) {
      // console.log(error);
    }
    // console.log(newPost);
  };
  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdate">Profile Update</span>
          <span className="settingsDelete">Profile Delete</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label htmlFor="">Profile picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : user.user.profilePic}
              alt="Profile picture"
            />
            <label htmlFor="fileInput" className="settingsPPIcon">
              {" "}
              +
            </label>
            <input
              type="file"
              id="fileInput"
              hidden
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder={user.user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder={user.user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsBtn" type="submit">
            {" "}
            Upddate
          </button>
          {message && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;
