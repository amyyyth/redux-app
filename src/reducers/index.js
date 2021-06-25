import counterReducer from './counter';
import isLoggedin from './isLogged';
import valueReducer from './value';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    loggedIn: isLoggedin,
    value: valueReducer
})


export default allReducers;