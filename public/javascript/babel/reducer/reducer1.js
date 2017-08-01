'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by leslie on 2017/7/19.
 */
var userData = "Vistor";

var logout = exports.logout = function logout() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'LOGOUT_ING':
            console.log('try log out');
            console.log(action.payload);
            return Object.assign({}, action.payload);
        case 'LOGOUT_ED':
            console.log('LOGOUT_ED');
            console.log(action.payload.state);
            if (action.payload.state == 'confirm_logout') {
                window.location.href = '/login';
                alert('Log out. Please log in again');
            } else {
                window.location.href = '/login';
                alert('Log out failed');
            }
            return Object.assign({}, action.payload);
        default:
            console.log('return the defalut logoutData');
            return null;
    }
};

var signup = exports.signup = function signup() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'SIGNUP_ING':
            console.log('SUBMIT_SIGNUP_DATA');
            console.log(action.payload);
            return Object.assign({}, action.payload);
        case 'SIGNUP_ED':
            console.log('SIGNUP_ED');
            console.log(action.payload.state);
            if (action.payload.state == 'userExsit') {
                window.location.href = '/signup';
                alert('The username exsits, please select another one.');
            } else if (action.payload.state == 'ok') {
                window.location.href = '/login';
            }
            return Object.assign({}, action.payload);
        default:
            console.log('return the defalut signupData');
            return null;
    }
};

var login = exports.login = function login() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userData;
    var action = arguments[1];

    switch (action.type) {
        case 'SUBMIT_DATA':
            console.log('SUBMIT_DATA');
            console.log(action.payload);
            return Object.assign({}, action.payload);
        case 'GET_VERYFY_DATA':
            console.log('GET_VERYFY_DATA');
            console.log(action.payload.state);
            if (action.payload.state == 'nouser') {
                window.location.href = '/signup';
                alert('user does not exsit, please signup');
            } else if (action.payload.state == 'nopassword') {
                window.location.href = '/login';
                alert('Wrong password! please input again');
            } else if (action.payload.state == 'ok') {
                window.location.href = '/';
            }
            userData = action.payload.user;
            console.log(action.payload.user);
            console.log(userData);
            //return action.payload.user;
            return Object.assign({}, state, action.payload.user);
        default:
            console.log('return the defalut loginData');
            console.log(state);
            return state;
    }
};