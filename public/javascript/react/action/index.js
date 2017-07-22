import $ from 'jquery';
import {store} from "../../babel/store.js"

export const submitData = (username,password) => {
    console.log("log codedata");
    console.log(username);
    console.log(password);
    return {
        type: 'SUBMIT_DATA',
        state: 'isFetchingdata',
        payload:   ($.ajax({
            method: "POST",
            data: {username: username,password:password},
            url: "/login",
            dataType: "json"
        }).then(function(data){
            console.log(data);
            console.log('back in ajax!');
            const action = {
                type: 'GET_VERYFY_DATA',
                state: 'finishFetchingdata',
                payload: data
            };
            store.dispatch(action);
            return data;
        }))
    }
};

export const signup = (username,password) => {
    console.log("log codedata");
    console.log(username);
    console.log(password);
    return {
        type: 'SIGNUP_ING',
        state: 'isFetchingdata',
        payload: ($.ajax({
            method: "POST",
            data: {username: username, password: password},
            url: "/signup",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            console.log('back in ajax!');
            const action = {
                type: 'SIGNUP_ED',
                state: 'finishFetchingdata',
                payload: data
            };
            store.dispatch(action);
            return data;
        }))
    }
};

export const logout = (username,password) => {
    console.log("logout");
    return {
        type: 'LOGOUT_ING',
        state: 'isFetchingdata',
        payload: ($.ajax({
            method: "POST",
            data: {},
            url: "/logout",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            console.log('back in ajax!');
            const action = {
                type: 'LOGOUT_ED',
                state: 'finishFetchingdata',
                payload: data
            };
            store.dispatch(action);
            return data;
        }))
    }
};