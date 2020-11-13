import { combineReducers } from 'redux';
import counterReducer from './counter';
import loginReducer from './loginReducer';


const rootReducer = combineReducers({
    count: counterReducer,
  });

const allReducers = combineReducers({
    login: loginReducer
});

export default allReducers;
