/**
 * Created by leslie on 2017/7/19.
 */
var userData=[
    {
        id:1,
        first:"Leslie",
        age:10
    },
    {
        id:3,
        first:"Bob",
        age:100
    }
];

export var logout = function(state = null,action){
    switch (action.type) {
        case 'LOGOUT_ING':
            console.log('try log out');
            console.log(action.payload);
            return Object.assign({},action.payload);
        case 'LOGOUT_ED':
            console.log('LOGOUT_ED');
            console.log(action.payload.state);
            if(action.payload.state == 'confirm_logout' ){
                window.location.href = '/login';
                alert('Log out. Please log in again');
            }else{
                window.location.href = '/login';
                alert('Log out failed');
            }
            return Object.assign({},action.payload);
        default:
            console.log('return the defalut userData');
            return null;
    }
};

export var signup = function(state = null,action){
    switch (action.type) {
    case 'SIGNUP_ING':
        console.log('SUBMIT_SIGNUP_DATA');
        console.log(action.payload);
        return Object.assign({},action.payload);
    case 'SIGNUP_ED':
        console.log('SIGNUP_ED');
        console.log(action.payload.state);
        if(action.payload.state == 'userExsit' ){
            window.location.href = '/signup';
            alert('The username exsits, please select another one.');
        }else if(action.payload.state == 'ok'){
            window.location.href = '/login';
        }
        return Object.assign({},action.payload);
    default:
        console.log('return the defalut userData');
        return null;
    }
};

export var login = function(state = userData,action){
    switch (action.type) {
        case 'SUBMIT_DATA':
            console.log('SUBMIT_DATA');
            console.log(action.payload);
            return Object.assign({},action.payload);
        case 'GET_VERYFY_DATA':
            console.log('GET_VERYFY_DATA');
            console.log(action.payload.state);
            if(action.payload.state == 'nouser' ){
                window.location.href = '/signup';
                alert('user does not exsit, please signup');
            }else if(action.payload.state == 'nopassword'){
                window.location.href = '/login';
                alert('Wrong password! please input again');
            }else if(action.payload.state == 'ok'){
                window.location.href = '/main';
            }
            return Object.assign({},action.payload);
        default:
            console.log('return the defalut userData');
            return userData;
    }
};