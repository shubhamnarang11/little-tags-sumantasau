import './Login.scss';
import { APP_LOGO, google_login, facebook_login } from '../../assets';
import { STATIC_DATA } from '../../config/StaticData';

type ModalProps = {
  onCloseLoginModalClick: () => void;
};

export default function Login(props: ModalProps) {

  const {
    ENGLISH: {     
      NO_SUCH_IMAGE,
    },
  } = STATIC_DATA;

  const { onCloseLoginModalClick } = props;

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
              <p> <img src={google_login} alt={NO_SUCH_IMAGE}></img>  </p>     
              <p><img src={facebook_login} alt={NO_SUCH_IMAGE}></img>   </p>
            </div>
          </div>
      </div>
    </div>
  );
}
