"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.submitData = undefined;

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _store = require("../../babel/store.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var submitData = exports.submitData = function submitData(username, password) {
    console.log("log codedata");
    console.log(username);
    console.log(password);
    return {
        type: 'SUBMIT_DATA',
        state: 'isFetchingdata',
        payload: _jquery2.default.ajax({
            method: "POST",
            data: { username: username, password: password },
            url: "/login",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            console.log('back in ajax!');
            var action = {
                type: 'GET_VERYFY_DATA',
                state: 'finishFetchingdata',
                payload: data
            };
            _store.store.dispatch(action);
            return data;
        })
    };
};