// import { createStore, compose, applyMiddleware} from 'redux';
// import thunk from "redux-thunk"


// import rootReducer from './reducers';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

// const store =  createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
// window.store =  store

// export default store;


import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;