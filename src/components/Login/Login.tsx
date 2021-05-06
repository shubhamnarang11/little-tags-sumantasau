import React, { useState, useContext, useRef, FC } from 'react';
import './Login.scss';
import {
  AVATAR_IMAGE,
  google_login,
  facebook_login,
  loginleft,
} from '../../assets';
import { STATIC_DATA } from '../../config/StaticData';
import FirebaseContext from '../Firebase/Context';
import { LoginModel } from '../../models/Login.model';
import { connect } from 'react-redux';
import { setUser } from '../../actions/Login.action';
import { addItemsToCart } from '../../actions/ProductDetails.action';

declare global {
  interface Window {
    confirmationResult: any;
  }
}
const Login: FC<LoginModel.IProps> = ({
  language,
  onCloseLoginModalClick,
  setUser,
  addItemsToCart,
}) => {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [displayMobile, setdisplayMobile] = useState(true);
  const [displayProfile, setdisplayProfile] = useState('');
  const [mobileNo, setmobileNo] = useState('');
  const [requiredMobileNo, setrequiredMobileNo] = useState(false);
  const [mobileOTP, setmobileOTP] = useState('');
  const [requiredMobileOTP, setrequiredMobileOTP] = useState(false);
  const [userName, setuserName] = useState('');
  const [requireduserName, setrequireduserName] = useState(false);
  const [imageFile, setImageFile] = useState('');
  const [imageFileURL, setImageFileURL] = useState('');

  const {
    [language]: {
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
      NO_IMAGE_FOUND,
    },
  } = STATIC_DATA;

  const inputFile = useRef<HTMLInputElement>(null);

  const handleSendOTP = () => {
    if (mobileNo) {
      const recaptchaVerifier = firebase.getRecaptcha();

      firebase.auth
        .signInWithPhoneNumber(mobileNo, recaptchaVerifier)
        .then((confirmationResult: any) => {
          window.confirmationResult = confirmationResult;
          setrequiredMobileNo(false);
          setdisplayMobile(false);
        });
    } else {
      setErrorMessage(LOGIN_MOBILE_VALIDATION_TEXT);
      setrequiredMobileNo(true);
    }
  };
  const handleLogin = () => {
    if (mobileOTP) {
      window.confirmationResult.confirm(mobileOTP).then((result: any) => {
        firebase.db
          .ref(`users/${result.user.uid}`)
          .once('value', (snap: any) => {
            const user = snap.val();

            if (user) {
              setUser(user);
              if (user.cartItems) {
                addItemsToCart(user.cartItems);
              }
              setrequireduserName(false);
              onCloseLoginModalClick();
            } else {
              setdisplayProfile(result.user.uid);
            }
            setrequiredMobileOTP(false);
          });
      });
    } else {
      setErrorMessage(LOGIN_OTP_VALIDATION_TEXT);
      setrequiredMobileOTP(true);
    }
  };

  const handleProfileSubmit = () => {
    if (userName && imageFileURL) {
      const uploadTask = firebase.storage
        .ref(`/images/${displayProfile}`)
        .put(imageFile);

      uploadTask.on('state_changed', console.log, console.error, () => {
        firebase.storage
          .ref('images')
          .child(displayProfile)
          .getDownloadURL()
          .then((url: any) => {
            const newUser = {
              uid: displayProfile,
              email: '',
              name: userName,
              phone: mobileNo,
              image: url,
              wishlist: [],
              orders: [],
              cartItems: [],
              addresses: [],
            };
            setUser(newUser);
            firebase.db
              .ref(`users/${displayProfile}`)
              .set(newUser)
              .then(() => {
                setrequireduserName(false);
                onCloseLoginModalClick();
              })
              .catch(console.log);
          });
      });
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
        firebase.db
          .ref(`users/${authUser.user.uid}`)
          .once('value', (snap: any) => {
            const user = snap.val();

            if (user) {
              setUser(user);
              if (user.cartItems) {
                addItemsToCart(user.cartItems);
              }
            } else {
              const newUser = {
                uid: authUser.user.uid,
                email: authUser.user.email,
                name: authUser.user.displayName,
                phone: authUser.user.phoneNumber,
                image: authUser.user.photoURL,
                wishlist: [],
                orders: [],
                cartItems: [],
                addresses: [],
              };
              setUser(newUser);
              firebase.db
                .ref(`users/${authUser.user.uid}`)
                .set(newUser)
                .catch(console.log);
            }
          });
      })
      .then(() => {
        onCloseLoginModalClick();
      })
      .catch((error: any) => {
        setErrorMessage(error.message);
      });
  };

  const handleFacebookSignIn = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser: any) => {
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      .then(() => {
        onCloseLoginModalClick();
      })
      .catch((error: any) => {
        setErrorMessage(error.message);
        console.log({ errorMessage: error });
      });
  };

  const previewImage = (event: any) => {
    setImageFile(event.target.files[0]);
    setImageFileURL(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <div id='login-container-overlay'>
        <div className='login-container'>
          <div className='left-section'>
            <img src={loginleft} alt={NO_IMAGE_FOUND}></img>
          </div>
          <div className='login-section'>
            <i
              className='fa fa-times fa-1x'
              onClick={onCloseLoginModalClick}
            ></i>
            <h1>{LOGIN_HEADING}</h1>
            {displayProfile ? (
              <div className='input-section'>
                <p>
                  <img
                    src={imageFileURL || AVATAR_IMAGE}
                    className='profile-img'
                    alt={AVATAR_ALT_TAG}
                    onClick={onImageClick}
                  />
                  <input
                    type='file'
                    id='file'
                    ref={inputFile}
                    className='profile-input-file'
                    onChange={previewImage}
                  />
                </p>
                <p className='input-heading'>{LOGIN_NAME_TEXT}</p>
                <input
                  type='text'
                  className='input-textbox'
                  value={userName}
                  onChange={(event) => {
                    setuserName(event.target.value);
                    setrequireduserName(false);
                  }}
                  required
                ></input>
                <p className='validation-messge'>
                  {requireduserName ? errorMessage : ''}
                </p>
                <p>
                  <input
                    type='button'
                    value={LOGIN_PROFILE_BUTTON_TEXT}
                    className='input-button'
                    onClick={handleProfileSubmit}
                  />
                </p>
              </div>
            ) : displayMobile ? (
              <div className='input-section'>
                <p className='input-heading'>{LOGIN_MOBILE_TEXT}</p>
                <input
                  type='text'
                  className='input-textbox'
                  value={mobileNo}
                  onChange={(event) => {
                    setmobileNo(event.target.value);
                    setrequiredMobileNo(false);
                  }}
                  required
                ></input>
                <p className='validation-messge'>
                  {requiredMobileNo ? errorMessage : ''}
                </p>
                <p>
                  <input
                    type='button'
                    value={LOGIN_SENDOTP_BUTTON_TEXT}
                    className='input-button'
                    onClick={handleSendOTP}
                  />
                </p>
                <div id='recaptcha-container'>
                </div>
              </div>
            ) : (
              <div className='input-section'>
                <p className='input-heading'>{LOGIN_OTP_TEXT}</p>
                <input
                  type='text'
                  className='input-textbox'
                  value={mobileOTP}
                  onChange={(event) => {
                    setmobileOTP(event.target.value);
                    setrequiredMobileOTP(false);
                  }}
                  required
                ></input>
                <p className='validation-messge'>
                  {requiredMobileOTP ? errorMessage : ''}
                </p>
                <p>
                  <input
                    type='button'
                    value={LOGIN_BUTTON_TEXT}
                    className='input-button'
                    onClick={handleLogin}
                  />
                </p>
                <h4>{LOGIN_INFO_TEXT}</h4>
              </div>
            )}

            <div className='division'>
              <hr></hr>
              <p>{LOGIN_SIGN_WITH_TEXT}</p>
              <hr></hr>
            </div>
            <div className='social-login'>
              <img
                src={google_login}
                alt={NO_IMAGE_FOUND}
                onClick={handleGoogleSignIn}
              ></img>
              <img
                src={facebook_login}
                alt={NO_IMAGE_FOUND}
                onClick={handleFacebookSignIn}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  language: state.dashboardState.language,
});
export default connect(mapStateToProps, { setUser, addItemsToCart })(Login);
