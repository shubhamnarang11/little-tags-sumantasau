import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CONFIG } from './config/Config';
import { CategoryHeader, Navbar, Profile, ShoppingCart, Footer } from './components';
//import { AppModel } from './models/App.model';

import { STATIC_DATA } from './config/StaticData';

function App() {
  const {
    ROUTES: { DEFAULT, DASHBOARD, PROFILE, SHOPPINGCART },
  } = CONFIG;
  const {
    ENGLISH: {
      App: { CATEGORIES },
    },
  } = STATIC_DATA;

  const getCategories = () => {
    return Object.keys(CATEGORIES);
  };

  return (
    <div className='App'>
      <Navbar />
      <CategoryHeader categories={getCategories()} />
      <Switch>
        <Route
          exact
          path={DEFAULT}
          render={() => <Redirect to={DASHBOARD}></Redirect>}
        ></Route>
        <Route path={DASHBOARD}></Route>
        <Route path={PROFILE}>
          <Profile />       
        </Route>
        <Route path={SHOPPINGCART}>
          <ShoppingCart />       
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
