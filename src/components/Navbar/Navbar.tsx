import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { APP_LOGO, MultiLingual } from '../../assets';
import { CONFIG } from '../../config/Config';
import { STATIC_DATA, TEST_DATA } from '../../config/StaticData';
import { NavbarModel } from '../../models/Navbar.model';
import './Navbar.scss';
import { Login } from '../../components/';

const Navbar: FC<NavbarModel.IProps> = ({ cartSize, loggedInUser }) => {
  const {
    ENGLISH: {
      Navbar: { SEARCH_PLACEHOLDER, SIGN_IN_CREATE_ACCOUNT, USER_MENU_ITEMS },
      NO_IMAGE_FOUND,
    },
  } = STATIC_DATA;
  const {
    ROUTES: { DEFAULT, SHOPPING_CART, PRODUCT_DETAILS, PRODUCTS },
  } = CONFIG;
  const { PRODUCTS_DATA } = TEST_DATA;
  const history = useHistory();

  const [isSearchBarForMobileOpen, setIsSearchBarForMobileOpen] = useState(
    false
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleSearchBar = () => {
    setIsSearchBarForMobileOpen(!isSearchBarForMobileOpen);
  };
  const getSearchedCategories = () => {
    const categories = PRODUCTS_DATA.filter((data) =>
      data.category.toLowerCase().includes(searchTerm.toLowerCase())
    ).map(({ categoryId, category, images }) => {
      return {
        id: categoryId,
        name: category,
        image: images[0],
        redirect: redirectToCategory,
      };
    });

    const filteredCategories: any = [];
    categories.forEach((data) => {
      const selectedCat = filteredCategories.findIndex(
        (fil: any) => fil.id === data.id
      );
      if (selectedCat === -1) {
        filteredCategories.push(data);
      }
    });

    return filteredCategories;
  };

  const getSearchedItems = () => {
    const products = PRODUCTS_DATA.filter((data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).map(({ id, name, category, images }) => {
      return {
        id,
        name,
        category,
        image: images[0],
        redirect: redirectToProductDescription,
      };
    });

    return products;
  };

  const redirectToProductDescription = (id: number) => {
    setSearchTerm('');
    history.push(`${PRODUCT_DETAILS}?pid=${id}`);
  };

  const redirectToCategory = (id: number, name: string) => {
    setSearchTerm('');
    history.push(`${PRODUCTS}?cid=${id}&cname=${name}`);
  };

  useEffect(() => {
    return () => {
      setSearchTerm('');
    };
  }, []);

  return (
    <>
      <div id='navbar-web-div'>
        <div className='app-logo'>
          <Link to={DEFAULT}>
            <img src={APP_LOGO} alt={NO_IMAGE_FOUND}></img>
          </Link>
        </div>
        <div className='search-bar'>
          <input
            type='text'
            placeholder={SEARCH_PLACEHOLDER}
            onChange={(event) => setSearchTerm(event.target.value)}
            className={searchTerm ? 'plain-border' : 'round-border'}
            value={searchTerm}
          ></input>
          {searchTerm && (
            <ul className='search-menu'>
              {getSearchedCategories().map((item: any) => (
                <li
                  key={item.id}
                  onClick={() => item.redirect(item.id, item.name)}
                >
                  <img src={item.image} alt={NO_IMAGE_FOUND}></img>
                  <div>
                    <h4>All {item.name}</h4>
                  </div>
                </li>
              ))}
              {getSearchedItems().map((item) => (
                <li key={item.id} onClick={() => item.redirect(item.id)}>
                  <img src={item.image} alt={NO_IMAGE_FOUND}></img>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.category}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='user-div'>
          <div className='shopping-cart'>
            <img src={MultiLingual} alt={NO_IMAGE_FOUND}></img>
            <i className='fa fa-heart'></i>
            <Link to={`${SHOPPING_CART}/cart-items`}>
              <i className='fa fa-shopping-cart'></i>
            </Link>
            {cartSize > 0 && (
              <div id='cart-total'>
                <Link to={`${SHOPPING_CART}/cart-items`}>{cartSize}</Link>
              </div>
            )}
          </div>
          {loggedInUser && Object.keys(loggedInUser).length > 0 ? (
            <>
              <p onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                {loggedInUser.name}
              </p>
              <img src={loggedInUser.image} alt={NO_IMAGE_FOUND}></img>
              {isUserMenuOpen ? (
                <ul className='user-menu'>
                  {USER_MENU_ITEMS.map((item) => (
                    <Link to={item.path}>
                      <li>{item.name}</li>
                    </Link>
                  ))}
                </ul>
              ) : null}
            </>
          ) : (
            <p
              onClick={() => {
                setShowLoginModal(true);
              }}
            >
              {SIGN_IN_CREATE_ACCOUNT}
            </p>
          )}
        </div>
      </div>
      <div id='navbar-mobile-div'>
        <i className='fa fa-bars bars'></i>
        <div className='app-logo'>
          <img src={APP_LOGO} alt={NO_IMAGE_FOUND}></img>
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
      {showLoginModal && (
        <Login
          onCloseLoginModalClick={() => {
            setShowLoginModal(false);
          }}
        />
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  cartSize: state.shoppingCartState.cartItems.length,
  loggedInUser: state.loginState.loggedInUser,
});

export default connect(mapStateToProps)(Navbar);
