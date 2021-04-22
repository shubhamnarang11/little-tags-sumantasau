import React, { useState, useContext, useRef } from "react";
import "./Login.scss";
import {
  AVATAR_IMAGE,
  google_login,
  facebook_login,
  loginleft,
} from "../../assets";
import { STATIC_DATA } from "../../config/StaticData";
import FirebaseContext from "../Firebase/Context";

type LoginModalProps = {
  onCloseLoginModalClick: () => void;
};

const initLocalStorage = (
  userMobile: string,
  userName: string,
  userImage: string
) => {
  window.localStorage.setItem("MOBILE", userMobile);
  window.localStorage.setItem("NAME", userName);
  window.localStorage.setItem("IMAGE", userImage);
};

export default function Login(props: LoginModalProps) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [displayMobile, setdisplayMobile] = useState(true);
  const [displayProfile, setdisplayProfile] = useState(false);
  const [mobileNo, setmobileNo] = useState("");
  const [requiredMobileNo, setrequiredMobileNo] = useState(false);
  const [mobileOTP, setmobileOTP] = useState("");
  const [requiredMobileOTP, setrequiredMobileOTP] = useState(false);
  const [userName, setuserName] = useState("");
  const [requireduserName, setrequireduserName] = useState(false);
  const [userImage, setuserImage] = useState(AVATAR_IMAGE);

  const {
    ENGLISH: {
      UserProfile: { AVATAR_ALT_TAG },
      Login: {
        LOGIN_HEADING,
        LOGIN_MOBILE_TEXT,
        LOGIN_SENDOTP_BUTTON_TEXT,
        LOGIN_INFO_TEXT,
        LOGIN_OTP_TEXT,
        LOGIN_BUTTON_TEXT,
        LOGIN_NAME_TEXT,
        LOGIN_PROFILE_BUTTON_TEXT,
        LOGIN_SIGN_WITH_TEXT,
        LOGIN_MOBILE_VALIDATION_TEXT,
        LOGIN_OTP_VALIDATION_TEXT,
        LOGIN_NAME_VALIDATION_TEXT,
      },
      NO_SUCH_IMAGE,
    },
  } = STATIC_DATA;

  const inputFile = useRef<HTMLInputElement>(null);

  const { onCloseLoginModalClick } = props;

  const handleSendOTP = () => {
    if (mobileNo) {
      setrequiredMobileNo(false);
      setdisplayMobile(false);
    } else {
      setErrorMessage(LOGIN_MOBILE_VALIDATION_TEXT);
      setrequiredMobileNo(true);
    }
  };
  const handleLogin = () => {
    if (mobileOTP) {
      setrequiredMobileOTP(false);
      setdisplayProfile(true);
    } else {
      setErrorMessage(LOGIN_OTP_VALIDATION_TEXT);
      setrequiredMobileOTP(true);
    }
  };

  const handleProfileSubmit = () => {
    if (userName) {
      setrequireduserName(false);
      setuserImage(AVATAR_IMAGE);
      initLocalStorage(userName, mobileNo, userImage);
      props.onCloseLoginModalClick();
    } else {
      setErrorMessage(LOGIN_NAME_VALIDATION_TEXT);
      setrequireduserName(true);
    }
  };

  const onImageClick = () => {
    if (inputFile.current !== null) {
      inputFile.current.click();
    }
  };

  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser: any) => {
        initLocalStorage(
          authUser.user.displayName,
          mobileNo,
          authUser.user.photoURL
        );
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      .then(() => {
        props.onCloseLoginModalClick();
      })
      .catch((error: any) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  };

  const handleFacebookSignIn = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser: any) => {
        console.log({
          email: authUser.user.email,
          username: authUser.user.displayName,
        });
        console.log(authUser);
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      .then(() => {
        props.onCloseLoginModalClick();
      })
      .catch((error: any) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  };

  return (
    <div id="login-container-overlay">
      <div className="login-container">
        <div className="left-section">
          <img src={loginleft} alt={NO_SUCH_IMAGE}></img>
        </div>
        <div className="login-section">
          <i className="fa fa-times fa-1x" onClick={onCloseLoginModalClick}></i>
          <h1>{LOGIN_HEADING}</h1>
          {displayProfile ? (
            <div className="input-section">
              <p>
                <img
                  src={AVATAR_IMAGE}
                  className="profile-image"
                  alt={AVATAR_ALT_TAG}
                  onClick={onImageClick}
                />
                <input
                  type="file"
                  id="file"
                  ref={inputFile}
                  className="profile-input-file"
                />
              </p>
              <p className="input-heading">{LOGIN_NAME_TEXT}</p>
              <input
                type="text"
                className="input-textbox"
                value={userName}
                onChange={(event) => {
                  setuserName(event.target.value);
                  setrequireduserName(false);
                }}
                required
              ></input>
              <p className="validation-messge">
                {requireduserName ? errorMessage : ""}
              </p>
              <p>
                <input
                  type="button"
                  value={LOGIN_PROFILE_BUTTON_TEXT}
                  className="input-button"
                  onClick={handleProfileSubmit}
                />
              </p>
            </div>
          ) : displayMobile ? (
            <div className="input-section">
              <p className="input-heading">{LOGIN_MOBILE_TEXT}</p>
              <input
                type="text"
                className="input-textbox"
                value={mobileNo}
                onChange={(event) => {
                  setmobileNo(event.target.value);
                  setrequiredMobileNo(false);
                }}
                required
              ></input>
              <p className="validation-messge">
                {requiredMobileNo ? errorMessage : ""}
              </p>
              <p>
                <input
                  type="button"
                  value={LOGIN_SENDOTP_BUTTON_TEXT}
                  className="input-button"
                  onClick={handleSendOTP}
                />
              </p>
              <h4>{LOGIN_INFO_TEXT}</h4>
            </div>
          ) : (
            <div className="input-section">
              <p className="input-heading">{LOGIN_OTP_TEXT}</p>
              <input
                type="text"
                className="input-textbox"
                value={mobileOTP}
                onChange={(event) => {
                  setmobileOTP(event.target.value);
                  setrequiredMobileOTP(false);
                }}
                required
              ></input>
              <p className="validation-messge">
                {requiredMobileOTP ? errorMessage : ""}
              </p>
              <p>
                <input
                  type="button"
                  value={LOGIN_BUTTON_TEXT}
                  className="input-button"
                  onClick={handleLogin}
                />
              </p>
              <h4>{LOGIN_INFO_TEXT}</h4>
            </div>
          )}

          <div className="division">
            <hr></hr>
            <p>{LOGIN_SIGN_WITH_TEXT}</p>
            <hr></hr>
          </div>
          <div className="social-login">
            <img
              src={google_login}
              alt={NO_SUCH_IMAGE}
              onClick={handleGoogleSignIn}
            ></img>
            <img
              src={facebook_login}
              alt={NO_SUCH_IMAGE}
              onClick={handleFacebookSignIn}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
