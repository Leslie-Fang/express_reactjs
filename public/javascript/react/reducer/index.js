/**
 * Created by leslie on 2017/7/19.
 */
import {combineReducers} from 'redux';
import {login,signup,logout} from './reducer1.js';

const allReducers = combineReducers({
    login: login,
    signup: signup,
    logout: logout
});

export default allReducers;