import counterReducer from './counter';
import isLoggedin from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    loggedIn: isLoggedin
})


export default allReducers;