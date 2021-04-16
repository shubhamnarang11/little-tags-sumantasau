import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CONFIG } from './config/Config';
import {
  CategoryHeader,
  Navbar,
  Profile,
  ShoppingCart,
  DeliveryAddress,
  AddDeliveryAddress,
  Footer,
  ProductDetails,
  Dashboard,
} from './components';
import { STATIC_DATA } from './config/StaticData';

function App() {
  const {
    ROUTES: {
      DEFAULT,
      DASHBOARD,
      PROFILE,
      PRODUCT_DETAILS,
      SHOPPING_CART,
      DELIVERY_ADDRESS,
      ADD_DELIVERY_ADDRESS,
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
        <Route
          exact
          path={DEFAULT}
          render={() => <Redirect to={DASHBOARD}></Redirect>}
        ></Route>
        <Route path={DASHBOARD} component={Dashboard}></Route>
        <Route path={PROFILE}>
          <Profile />
        </Route>
        <Route path={SHOPPING_CART}>
          <ShoppingCart />
        </Route>
        <Route path={DELIVERY_ADDRESS}>
          <DeliveryAddress />
        </Route>
        <Route path={ADD_DELIVERY_ADDRESS}>
          <AddDeliveryAddress />
        </Route>
        <Route path={PRODUCT_DETAILS}>
          <ProductDetails></ProductDetails>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
