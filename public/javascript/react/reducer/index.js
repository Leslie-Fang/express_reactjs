/**
 * Created by leslie on 2017/7/19.
 */
import {combineReducers} from 'redux';
import {login,signup,logout,headerInitState} from './reducer1.js';

const allReducers = combineReducers({
    login: login,
    signup: signup,
    logout: logout,
    headerInitState: headerInitState
});

export default allReducers;