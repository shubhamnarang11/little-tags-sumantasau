//import logo from './logo.svg';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CONFIG } from './config/Config';
import Profile from "./components/Profile/Profile";

function App() {
  const {
    ROUTES: { DEFAULT, DASHBOARD, PROFILE },
  } = CONFIG;
  
  return (
    <div className='App'>
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
