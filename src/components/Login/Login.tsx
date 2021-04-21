import React, { useState, useContext, useRef } from "react";
import "./Login.scss";
import { google_login, facebook_login, loginleft } from "../../assets";
import { STATIC_DATA } from "../../config/StaticData";
import FirebaseContext from "../Firebase/Context";
import { AVATAR_IMAGE } from "../../assets";

type ModalProps = {
  onCloseLoginModalClick: () => void;
};

export default function Login(props: ModalProps) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [displayMobile, setdisplayMobile] = useState(true);
  const [displayProfile, setdisplayProfile] = useState(false);

  const {
    ENGLISH: {
      UserProfile: { AVATAR_ALT_TAG },
      Login: {
        LOGIN_HEADING,
        LOGIN_MOBILE_TEXT,
        LOGIN_MOBILE_PLACEHOLDER,
        LOGIN_SENDOTP_BUTTON_TEXT,
        LOGIN_INFO_TEXT,
        LOGIN_OTP_TEXT,
        LOGIN_OTP_PLACEHOLDER,
        LOGIN_BUTTON_TEXT,
        LOGIN_NAME_TEXT,
        LOGIN_NAME_PLACEHOLDER,
        LOGIN_PROFILE_BUTTON_TEXT,
        LOGIN_SIGN_WITH_TEXT,
      },
      NO_SUCH_IMAGE,
    },
  } = STATIC_DATA;

  const inputFile = useRef<HTMLInputElement>(null);

  const { onCloseLoginModalClick } = props;

  const handleSendOTP = () => {
    setdisplayMobile(false);
  };
  const handleLogin = () => {
    setdisplayProfile(true);
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
        console.log({ email: authUser.email, username: authUser.displayName });
        console.log(authUser);
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      /*.then(() => {
        //props.history.push(ROUTES.HOME);
        console.log('google login');
      })*/
      .catch((error: any) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  };

  const handleFacebookSignIn = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser: any) => {
        console.log({ email: authUser.email, username: authUser.displayName });
        console.log(authUser);
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      /*.then(() => {
        //props.history.push(ROUTES.HOME);
        console.log('google login');
      })*/
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
          <h2>{LOGIN_HEADING}</h2>
          {displayProfile ? (
            <div className="input-section">
              <p>{LOGIN_NAME_TEXT}</p>
              <input type="text" placeholder={LOGIN_NAME_PLACEHOLDER}></input>
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
              <p>
                <input
                  type="button"
                  value={LOGIN_PROFILE_BUTTON_TEXT}
                  className="input-button"
                />
              </p>
            </div>
          ) : displayMobile ? (
            <div className="input-section">
              <p>{LOGIN_MOBILE_TEXT}</p>
              <input type="text" placeholder={LOGIN_MOBILE_PLACEHOLDER}></input>
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
              <p>{LOGIN_OTP_TEXT}</p>
              <input type="text" placeholder={LOGIN_OTP_PLACEHOLDER}></input>
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
