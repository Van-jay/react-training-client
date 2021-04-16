import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';

const middlewares = [thunk];

export const store = createStore(authReducer, applyMiddleware(...middlewares));
