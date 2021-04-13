import React, { useState, useRef } from "react";
import avatar_image from "../../assets/avatar.jpg";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./Profile.scss";
import {
  SessionKeys
} from "../../config/StaticData";


//AFTER LOGIN, SESSION NEEDS TO SET
sessionStorage.setItem(SessionKeys.USERNAME, "XXXXXX XXXXX");

const initLocalStorage = (userName:string, userEmail:string, userMobile:string) => {
  window.localStorage.setItem("NAME", userName);
  window.localStorage.setItem("EMAIL", userEmail);
  window.localStorage.setItem("MOBILE", userMobile);
};

export default function Profile() {
  const [userName, setuserName] = useLocalStorage("NAME", "XXXXXX XXXXX"); 
  const [userMobile, setuserMobile] = useLocalStorage("MOBILE", "");
  const [userEmail, setuserEmail] = useLocalStorage("EMAIL", "");


  const inputFile = useRef<HTMLInputElement>(null)

  const [isInputForData, setisInputForData] = useState("");
  const logUserName =  sessionStorage.getItem(SessionKeys.USERNAME) ?? ""; 

  const onSaveProfileClick = () => {
    initLocalStorage(userName, userEmail, userMobile);
  };
  const makeDataEditable = (inputValue:string) => {    
    if (logUserName === userName) {
      setisInputForData(inputValue);
    }
  };

  const onImageClick = () => {
    
    if (inputFile.current !== null) {
        inputFile.current.click();
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <img src={avatar_image} className="profile-image" alt="user profile" onClick={onImageClick} />
                
        <input type='file' id='file' ref={inputFile} className="profile-input-file"/>
      </div>


      <div className="profile-main">
        <ul>
          
          <li>
            {((isInputForData && isInputForData === "username") || !userName) ? (
              <div className="profile-input-container">
                <input
                  type="text"
                  value={userName}
                  className="profile-form-field-textbox"
                  placeholder="Enter your name"
                  onChange={(event) => {
                    setuserName(event.target.value);
                  }}
                  required
                />
              </div>
            ) : (
              <div
                className="profile-form-field-name"
                onClick={() => makeDataEditable("username")}
              >
                {userName}
              </div>
            )}
          </li>
          <li>
            {((isInputForData && isInputForData === "useremail") || !userEmail )? (
              <div className="profile-input-container">
                <input
                  type="text"
                  value={userEmail}
                  className="profile-form-field-textbox"
                  placeholder="Enter your email"
                  onChange={(event) => {
                    setuserEmail(event.target.value);
                  }}
                  required
                />
              </div>
            ) : (
              <div
                className="profile-form-field-name"
                onClick={() => makeDataEditable("useremail")}
              >
                {userEmail}
              </div>
            )}
          </li>
          <li>
            {((isInputForData && isInputForData === "usermobile") || !userMobile) ? (
              <div className="profile-input-container">
                <input
                  type="text"
                  value={userMobile}
                  className="profile-form-field-textbox"
                  placeholder="Enter your mobile"
                  onChange={(event) => {
                    setuserMobile(event.target.value);
                  }}
                  required
                />
              </div>
            ) : (
              <div
                className="profile-form-field-name"
                onClick={() => makeDataEditable("usermobile")}
              >
                {userMobile}
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className="profile-right">
        <input
          type="button"
          className="profile-form-field-button profile-form-field-button-disable"
          onClick={onSaveProfileClick}
          value="Save Profile"
          disabled={!logUserName}
        />
      </div>
    </div>
  );
}

