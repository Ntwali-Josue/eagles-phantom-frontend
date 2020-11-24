import { combineReducers } from 'redux';
import counterReducer from './reducerLogout'

const rootReducer = combineReducers({
    count: counterReducer,
  });

export default rootReducer;
