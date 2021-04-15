import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_LOGO } from '../../assets';
import { CONFIG } from '../../config/Config';
import { STATIC_DATA } from '../../config/StaticData';
import './Navbar.scss';

export default function Navbar() {
  const {
    ENGLISH: {
      Navbar: { SEARCH_PLACEHOLDER, SIGN_IN_CREATE_ACCOUNT },
      NO_SUCH_IMAGE,
    },
  } = STATIC_DATA;
  const {
    ROUTES: { DASHBOARD },
  } = CONFIG;

  const [isSearchBarForMobileOpen, setIsSearchBarForMobileOpen] = useState(
    false
  );

  const handleSearchBar = () => {
    setIsSearchBarForMobileOpen(!isSearchBarForMobileOpen);
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
          <p>{SIGN_IN_CREATE_ACCOUNT}</p>
        </div>
        <i className='fa fa-shopping-cart shopping-cart'></i>
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
}
