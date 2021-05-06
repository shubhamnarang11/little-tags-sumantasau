import React, { FC, useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { APP_LOGO, MultiLingual } from '../../assets';
import { CONFIG } from '../../config/Config';
import { STATIC_DATA } from '../../config/StaticData';
import { NavbarModel } from '../../models/Navbar.model';
import './Navbar.scss';
import { Login } from '../../components/';
import { setUser } from '../../actions/Login.action';
import { addItemsToCart } from '../../actions/ProductDetails.action';
import FirebaseContext from '../Firebase/Context';
import { setLanguage } from '../../actions/Dashboard.action';

const Navbar: FC<NavbarModel.IProps> = ({
  language,
  cartSize,
  loggedInUser,
  products,
  showSideMenu,
  setUser,
  addItemsToCart,
  setLanguage,
}) => {
  const {
    [language]: {
      Navbar: { SEARCH_PLACEHOLDER, SIGN_IN_CREATE_ACCOUNT, USER_MENU_ITEMS },
      NO_IMAGE_FOUND,
    },
  } = STATIC_DATA;
  const {
    ROUTES: { DEFAULT, SHOPPING_CART, PRODUCT_DETAILS, PRODUCTS },
    LANGUAGES,
  } = CONFIG;
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  const [isSearchBarForMobileOpen, setIsSearchBarForMobileOpen] = useState(
    false
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const handleSearchBar = () => {
    setIsSearchBarForMobileOpen(!isSearchBarForMobileOpen);
  };
  const getSearchedCategories = () => {
    const categories = products
      .filter((data: any) =>
        data.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((product: any) => {
        return {
          id: product.categoryId,
          name: product.category,
          image: product.images[0],
          redirect: redirectToCategory,
        };
      });

    const filteredCategories: any = [];
    categories.forEach((data: any) => {
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
    const filteredProducts = products
      .filter((data: any) =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((product: any) => {
        return {
          id: product.id,
          name: product.name,
          category: product.category,
          image: product.images[0],
          redirect: redirectToProductDescription,
        };
      });

    return filteredProducts;
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
    if (!loggedInUser || Object.keys(loggedInUser).length === 0) {
      const userId = localStorage.getItem('userId');

      if (userId) {
        firebase.db.ref(`users/${userId}`).once('value', (snap: any) => {
          const user = snap.val();

          if (user) {
            setUser(user);
            if (user.cartItems) {
              addItemsToCart(user.cartItems);
            }
          }
        });
      }
    }
    return () => {
      setSearchTerm('');
    };
    // eslint-disable-next-line
  }, [loggedInUser]);

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
              {getSearchedItems().map((item: any) => (
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
            <img
              src={MultiLingual}
              alt={NO_IMAGE_FOUND}
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            ></img>
            {isLanguageMenuOpen ? (
              <ul className='language-menu'>
                {LANGUAGES.map((item) => (
                  <li
                    onClick={() => {
                      setLanguage(item.toUpperCase());
                      setIsLanguageMenuOpen(!isLanguageMenuOpen);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
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
              <img
                src={loggedInUser.image}
                alt={NO_IMAGE_FOUND}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              ></img>
              {isUserMenuOpen ? (
                <ul className='user-menu'>
                  {USER_MENU_ITEMS.map((item) => (
                    <Link to={item.path}>
                      <li
                        onClick={() => {
                          if (
                            item.name === 'Logout' ||
                            item.name === 'Cerrar sesión'
                          ) {
                            localStorage.clear();
                            if (window.location.pathname === '/') {
                              window.location.reload();
                            }
                            history.push('/');
                          }
                          setIsUserMenuOpen(!isUserMenuOpen);
                        }}
                      >
                        {item.name}
                      </li>
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
        <i className='fa fa-bars bars' onClick={() => showSideMenu(true)}></i>
        <div className='app-logo'>
          <Link to={DEFAULT}>
            <img src={APP_LOGO} alt={NO_IMAGE_FOUND}></img>
          </Link>
        </div>
        {isSearchBarForMobileOpen ? (
          <div className='search-bar'>
            <div id='main'>
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
                        <h6>All {item.name}</h6>
                      </div>
                    </li>
                  ))}
                  {getSearchedItems().map((item: any) => (
                    <li key={item.id} onClick={() => item.redirect(item.id)}>
                      <img src={item.image} alt={NO_IMAGE_FOUND}></img>
                      <div>
                        <h6>{item.name}</h6>
                        <p>{item.category}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ) : (
          <i className='fa fa-search search-bar' onClick={handleSearchBar}></i>
        )}
        <Link to={`${SHOPPING_CART}/cart-items`} className='shopping-cart'>
          <i className='fa fa-shopping-cart'></i>
          {cartSize > 0 && <div id='cart-total'>{cartSize}</div>}
        </Link>
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
  products: state.dashboardState.products,
  language: state.dashboardState.language,
});

export default connect(mapStateToProps, {
  setUser,
  addItemsToCart,
  setLanguage,
})(Navbar);
