import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers';

//Store
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())))
