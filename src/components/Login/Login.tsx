import React, { useState, useContext } from 'react';
import './Login.scss';
import { APP_LOGO, google_login, facebook_login } from '../../assets';
import { STATIC_DATA } from '../../config/StaticData';
import FirebaseContext from '../Firebase/Context';

type ModalProps = {
  onCloseLoginModalClick: () => void;
};

export default function Login(props: ModalProps) {

  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    ENGLISH: {     
      NO_SUCH_IMAGE,
    },
  } = STATIC_DATA;

  const { onCloseLoginModalClick } = props;

  const handleGoogleSignIn = () => {
   
    firebase 
      .doGoogleSignIn()
      .then((authUser:any) => {
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
      .catch((error:any) => {        
        setErrorMessage(error.message);
        console.log(error.message);
      });
  };

  const handleFacebookSignIn = () => {
   
    firebase 
      .doFacebookSignIn()
      .then((authUser:any) => {
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
      .catch((error:any) => {        
        setErrorMessage(error.message);
        console.log(error.message);
      });
  };

  return (
    <div id="login-container-overlay">
      <div className="login-container">
          <div className="header-section">
           <div>
            <img src={APP_LOGO} alt={NO_SUCH_IMAGE}></img>  
            </div>
            <div>
          <i className='fa fa-times fa-2x' onClick={onCloseLoginModalClick}></i>  
          </div>
          </div>
          <div className="login-section">
            <div className="round-container">
              <p> <img src={google_login} alt={NO_SUCH_IMAGE} onClick={handleGoogleSignIn}></img>  </p>     
              <p><img src={facebook_login} alt={NO_SUCH_IMAGE} onClick={handleFacebookSignIn}></img>   </p>
            </div>
          </div>
      </div>
    </div>
  );
}
