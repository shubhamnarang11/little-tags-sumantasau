import React, { FC } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CONFIG } from '../../config/Config';
import { STATIC_DATA, TEST_DATA } from '../../config/StaticData';
import { SideMenuModel } from '../../models/SideMenu.model';
import './SideMenu.scss';

const SideMenu: FC<SideMenuModel.IProps> = ({
  loggedInUser,
  closeSideMenu,
}) => {
  const {
    ENGLISH: {
      HOME,
      NO_IMAGE_FOUND,
      SideMenu: { HELLO, GUEST, USER_MENU_ITEMS },
      Navbar: { SIGN_IN_CREATE_ACCOUNT },
    },
  } = STATIC_DATA;
  const { CATEGORIES_DATA } = TEST_DATA;
  const {
    ROUTES: { PRODUCTS },
  } = CONFIG;
  const history = useHistory();

  const redirectToRoute = (route: string) => {
    history.push(route);
    closeSideMenu(false);
  };
  const showLogin = () => {
    closeSideMenu(false, true);
  };

  return (
    <div className='sidemenu-div'>
      {loggedInUser && Object.keys(loggedInUser).length > 0 ? (
        <div className='header'>
          <img src={loggedInUser.image} alt={NO_IMAGE_FOUND}></img>
          <p>
            {HELLO}, {loggedInUser.name}
          </p>
          <i className='fa fa-times' onClick={() => closeSideMenu(false)}></i>
        </div>
      ) : (
        <div className='header'>
          <i className='fa fa-user-circle-o user'></i>
          <p>
            {HELLO}, {GUEST}
          </p>
          <i className='fa fa-times' onClick={() => closeSideMenu(false)}></i>
        </div>
      )}
      <div className='category-div'>
        <ul>
          <li onClick={() => redirectToRoute('/')}>{HOME}</li>
          {CATEGORIES_DATA.map(({ id, name }) => (
            <li
              onClick={() =>
                redirectToRoute(`${PRODUCTS}?cid=${id}&cname=${name}`)
              }
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      {loggedInUser && Object.keys(loggedInUser).length > 0 ? (
        <div className='login-div'>
          <ul>
            {USER_MENU_ITEMS.map(({ path, name }) => (
              <li onClick={() => redirectToRoute(path)}>{name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className='language-div'>
          <p onClick={showLogin}>{SIGN_IN_CREATE_ACCOUNT}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  loggedInUser: state.loginState.loggedInUser
});

export default connect(mapStateToProps)(SideMenu);
