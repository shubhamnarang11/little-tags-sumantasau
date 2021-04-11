import React, { useState, useRef } from "react";
import avatar_image from "../../assets/avatar.jpg";
import camera_image from "../../assets/camera.png";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./Profile.css";
import {
  SessionKeys
} from "../../config/StaticData.ts";


//AFTER LOGIN, SESSION NEEDS TO SET
sessionStorage.setItem(SessionKeys.USERNAME, "XXXXXX XXXXX");

const initLocalStorage = (userName, userEmail, userMobile) => {
  window.localStorage.setItem("NAME", userName);
  window.localStorage.setItem("EMAIL", userEmail);
  window.localStorage.setItem("MOBILE", userMobile);
};


export default function Profile() {
  const [userName, setuserName] = useLocalStorage("NAME", "XXXXXX XXXXX");
 
  const [userMobile, setuserMobile] = useLocalStorage("MOBILE", "");
  const [userEmail, setuserEmail] = useLocalStorage("EMAIL", "");

  const inputFile = useRef(null) 

  const [isInputForData, setisInputForData] = useState("");
  const logUserName =  sessionStorage.getItem(SessionKeys.USERNAME) ?? "";

 // const x = [{ label: "UserName", value: { userName } }];

  const onSaveProfileClick = () => {
    initLocalStorage(userName, userEmail, userMobile);
  };
  const makeDataEditable = (inputValue) => {    
    if (logUserName === userName) {
      setisInputForData(inputValue);
    }
  };

  const onImageClick = () => {
    // `current` points to the mounted file input element
   inputFile.current.click();
  };

  return (
    <div className="container">
      <div className="left">
        <img src={avatar_image} className="profile-image" alt="user profile" onClick={onImageClick} />
        <img src={camera_image} className="small-camera" alt="small camera" onClick={onImageClick} />
        
        <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
      </div>


      <div className="main">
        <ul>
          {/*{x.map((data) => (
            <li>{data.label}</li>
          ))}*/}
          <li>
            {((isInputForData && isInputForData === "username") || !userName) ? (
              <div className="input-container">
                <input
                  type="text"
                  value={userName}
                  className="form-field-textbox"
                  placeholder="Enter your name"
                  onChange={(event) => {
                    setuserName(event.target.value);
                  }}
                  required
                />
              </div>
            ) : (
              <div
                className="form-field-name"
                onClick={() => makeDataEditable("username")}
              >
                {userName}
              </div>
            )}
          </li>
          <li>
            {((isInputForData && isInputForData === "useremail") || !userEmail )? (
              <div className="input-container">
                <input
                  type="text"
                  value={userEmail}
                  className="form-field-textbox"
                  placeholder="Enter your email"
                  onChange={(event) => {
                    setuserEmail(event.target.value);
                  }}
                  required
                />
              </div>
            ) : (
              <div
                className="form-field-name"
                onClick={() => makeDataEditable("useremail")}
              >
                {userEmail}
              </div>
            )}
          </li>
          <li>
            {((isInputForData && isInputForData === "usermobile") || !userMobile) ? (
              <div className="input-container">
                <input
                  type="text"
                  value={userMobile}
                  className="form-field-textbox"
                  placeholder="Enter your mobile"
                  onChange={(event) => {
                    setuserMobile(event.target.value);
                  }}
                  required
                />
              </div>
            ) : (
              <div
                className="form-field-name"
                onClick={() => makeDataEditable("usermobile")}
              >
                {userMobile}
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className="right">
        <input
          type="button"
          className="form-field-button form-field-button-disable"
          onClick={onSaveProfileClick}
          value="Save Profile"
          disabled={!logUserName}
        />
      </div>
    </div>
  );
}
