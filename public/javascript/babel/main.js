"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComponentMain = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require("react-redux");

var _store = require("../babel/store.js");

var _header = require("../babel/container/header.js");

var _header2 = _interopRequireDefault(_header);

var _containerMain = require("../babel/container/containerMain.js");

var _containerMain2 = _interopRequireDefault(_containerMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by leslie on 2017/7/19.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ComponentMain = exports.ComponentMain = function (_React$Component) {
    _inherits(ComponentMain, _React$Component);

    function ComponentMain(props) {
        _classCallCheck(this, ComponentMain);

        return _possibleConstructorReturn(this, (ComponentMain.__proto__ || Object.getPrototypeOf(ComponentMain)).call(this, props));
    }

    _createClass(ComponentMain, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "mainContent" },
                React.createElement(
                    "h1",
                    { className: "text-center" },
                    "Main Page"
                ),
                React.createElement(_containerMain2.default, null)
            );
        }
    }]);

    return ComponentMain;
}(React.Component);

var Board = function (_React$Component2) {
    _inherits(Board, _React$Component2);

    function Board(props) {
        _classCallCheck(this, Board);

        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));
    }

    _createClass(Board, [{
        key: "render",
        value: function render() {
            console.log("asda");
            console.log(_store.store.getState());
            console.log(_store.store.getState().headerInitState);
            return React.createElement(
                _reactRedux.Provider,
                { store: _store.store },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(_header2.default, { user: _store.store.getState().headerInitState }),
                    React.createElement(ComponentMain, { user: _store.store.getState().headerInitState })
                )
            );
        }
    }]);

    return Board;
}(React.Component);

ReactDOM.render(React.createElement(Board, null), document.getElementById('main'));