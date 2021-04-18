import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { APP_LOGO } from '../../assets';
import { CONFIG } from '../../config/Config';
import { STATIC_DATA } from '../../config/StaticData';
import { NavbarModel } from '../../models/Navbar.model';
import './Navbar.scss';

const Navbar: FC<NavbarModel.IProps> = ({ cartSize }) => {
  const {
    ENGLISH: {
      Navbar: { SEARCH_PLACEHOLDER, SIGN_IN_CREATE_ACCOUNT },
      NO_SUCH_IMAGE,
    },
  } = STATIC_DATA;
  const {
    ROUTES: { DASHBOARD, SHOPPING_CART },
  } = CONFIG;

  const [isSearchBarForMobileOpen, setIsSearchBarForMobileOpen] = useState(
    false
  );

  const handleSearchBar = () => {
    setIsSearchBarForMobileOpen(!isSearchBarForMobileOpen);
  };

  const OpenLoginModal = () => {
    //const ModalOpen: NavbarModel.LoginModalOpen = IsModalOpen;    
    console.log('2');
    
  };

  return (
    <>
      <div id='navbar-web-div'>
        <div className='app-logo'>
          <Link to={DASHBOARD}>
            <img src={APP_LOGO} alt={NO_SUCH_IMAGE}></img>
          </Link>
        </div>
        <div className='search-bar'>
          <input type='text' placeholder={SEARCH_PLACEHOLDER}></input>
        </div>
        <div className='user-div'>
          <i className='fa fa-user-circle'></i>
          <p onClick={() => OpenLoginModal()}>{SIGN_IN_CREATE_ACCOUNT}</p>
        </div>
        <div className='shopping-cart'>
          <Link to={`${SHOPPING_CART}/cart-items`}>
            <i className='fa fa-shopping-cart'></i>
          </Link>
          {cartSize > 0 && <div id='cart-total'>{cartSize}</div>}
        </div>
      </div>
      <div id='navbar-mobile-div'>
        <i className='fa fa-bars bars'></i>
        <div className='app-logo'>
          <img src={APP_LOGO} alt={NO_SUCH_IMAGE}></img>
        </div>
        {isSearchBarForMobileOpen ? (
          <div className='search-bar'>
            <div>
              <input type='text' placeholder={SEARCH_PLACEHOLDER}></input>
            </div>
          </div>
        ) : (
          <i className='fa fa-search search-bar' onClick={handleSearchBar}></i>
        )}
        <i className='fa fa-shopping-cart shopping-cart'></i>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  cartSize: state.shoppingCartState.cartItems.length,
  //IsLoginModalOpen: state.loginState.isLoginModalOpen
});

export default connect(mapStateToProps)(Navbar);
