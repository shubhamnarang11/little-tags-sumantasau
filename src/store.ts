import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import shoppingCartState from './reducers/ShoppingCart.reducer';
import loginState from './reducers/Login.reducer';
import dashboardState from './reducers/Dashboard.reducer';
import 'regenerator-runtime/runtime';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
  shoppingCartState,
  loginState,
  dashboardState,
});

export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);
