import React, { useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { CONFIG } from './config/Config';
import {
  CategoryHeader,
  Navbar,
  Profile,
  ShoppingCart,
  AddDeliveryAddress,
  Footer,
  ProductDetails,
  Dashboard,
  OrderHistory,
  OrderPlaced,
  SideMenu,
  Login,
  Logout,
} from './components';
import { STATIC_DATA } from './config/StaticData';
import Products from './components/Products/Products';

function App() {
  const {
    ROUTES: {
      DEFAULT,
      PROFILE,
      PRODUCT_DETAILS,
      SHOPPING_CART,
      ADD_DELIVERY_ADDRESS,
      PRODUCTS,
      ORDER_HISTORY,
      ORDER_PLACED,
      LOGOUT,
    },
    CATEGORY_HEADER_NOT_AVAILABLE_ROUTES,
  } = CONFIG;
  const {
    ENGLISH: {
      App: { CATEGORIES },
    },
  } = STATIC_DATA;
  const [isSideMenu, setIsSideMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const getCategories = () => {
    return Object.keys(CATEGORIES);
  };

  const isCategoryHeaderAvailable = () => {
    return !CATEGORY_HEADER_NOT_AVAILABLE_ROUTES.includes(
      window.location.pathname
    );
  };

  const toggleSideMenu = (value: boolean, showLogin?: boolean) => {
    setIsSideMenu(value);

    if (showLogin) {
      setShowLoginModal(showLogin);
    }
  };

  return (
    <div className='App'>
      {isSideMenu ? (
        <SideMenu closeSideMenu={toggleSideMenu}></SideMenu>
      ) : (
        <>
          {' '}
          <Navbar showSideMenu={toggleSideMenu} />
          {isCategoryHeaderAvailable() ? (
            <CategoryHeader categories={getCategories()} />
          ) : null}
          <Switch>
            <Route exact path={DEFAULT} component={Dashboard}></Route>
            <Route path={PROFILE}>
              <Profile />
            </Route>
            <Route path={SHOPPING_CART}>
              <ShoppingCart />
            </Route>
            <Route path={ADD_DELIVERY_ADDRESS}>
              <AddDeliveryAddress />
            </Route>
            <Route path={PRODUCT_DETAILS}>
              <ProductDetails></ProductDetails>
            </Route>
            <Route path={PRODUCTS} component={Products}></Route>
            <Route path={ORDER_HISTORY}>
              <OrderHistory />
            </Route>
            <Route path={ORDER_PLACED} component={OrderPlaced}></Route>
            <Route path={LOGOUT}>
              <Logout></Logout>
            </Route>
          </Switch>

          <Footer/>
          {showLoginModal && (
            <Login
              onCloseLoginModalClick={() => {
                setShowLoginModal(false);
              }}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
