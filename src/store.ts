import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import shoppingCartState from './reducers/ShoppingCart.reducer';
import 'regenerator-runtime/runtime';

const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({ shoppingCartState });

export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
