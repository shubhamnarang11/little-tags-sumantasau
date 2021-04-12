import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CONFIG } from './config/Config';
import { Navbar, Profile } from './components';

function App() {
  const {
    ROUTES: { DEFAULT, DASHBOARD, PROFILE },
  } = CONFIG;

  return (
    <div className='App'>
      <Navbar />
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

      </Switch>
    </div>
  );
}

export default App;
