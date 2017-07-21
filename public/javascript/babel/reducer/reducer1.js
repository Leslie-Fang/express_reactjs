"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by leslie on 2017/7/19.
 */
var userData = [{
    id: 1,
    first: "Leslie",
    age: 10
}, {
    id: 3,
    first: "Bob",
    age: 100
}];

var users = exports.users = function users() {
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
            return Object.assign({}, action.payload);
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
                window.location.href = '/';
            }
            return Object.assign({}, action.payload);
        default:
            console.log('return the defalut userData');
            return userData;
    }
};