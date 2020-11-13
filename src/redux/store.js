import {createStore,compose,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from "./reducers/counter";
import { composeWithDevTools} from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import allReducers from './reducers';

const rootReducer = combineReducers({
  count: counterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk, promise)
const store =createStore(allReducers, {}, composeWithDevTools(middleware));

export default (store,createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
));
