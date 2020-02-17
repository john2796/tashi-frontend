import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
// import logger from "redux-logger"
import rootReducer from './reducers';

const middleware = [thunk];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;
