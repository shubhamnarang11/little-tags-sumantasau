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
} from "./components";
import { STATIC_DATA } from "./config/StaticData";
import Products from "./components/Products/Products";
import React from "react";

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
    },
    CATEGORY_HEADER_NOT_AVAILABLE_ROUTES,
  } = CONFIG;
  const {
    ENGLISH: {
      App: { CATEGORIES },
    },
  } = STATIC_DATA;

  const getCategories = () => {
    return Object.keys(CATEGORIES);
  };

  const isCategoryHeaderAvailable = () => {
    return !CATEGORY_HEADER_NOT_AVAILABLE_ROUTES.includes(
      window.location.pathname
    );
  };

  return (
    <div className='App'>
      <Navbar />
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
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
