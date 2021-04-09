import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";

const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({});

export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
