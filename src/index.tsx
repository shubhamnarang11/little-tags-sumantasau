import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import FirebaseContext from './components/Firebase/Context';
import Firebase from './components/Firebase/Firebase';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>    
        <FirebaseContext.Provider value={new Firebase()}>
          <App />     
        </FirebaseContext.Provider>    
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
