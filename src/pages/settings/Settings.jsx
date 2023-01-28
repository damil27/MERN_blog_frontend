import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
const Settings = () => {
  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdate">Profile Update</span>
          <span className="settingsDelete">Profile Delete</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile picture</label>
          <div className="settingsPP">
            <img src="" alt="Profile picture" />
            <label htmlFor="fileInput" className="settingsPPIcon">
              {" "}
              +
            </label>
            <input type="file" id="fileInput" hidden />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Gloria" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Gloria@me.com" />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" />
          <button className="settingsBtn"> Upddate</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
