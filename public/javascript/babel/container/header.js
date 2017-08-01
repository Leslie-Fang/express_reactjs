'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _index = require('../../babel/action/index.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by leslie on 2017/7/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ logout: _index.logout }, dispatch);
}

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = { userNameValue: _this.props.login };
        console.log("==============>");
        console.log(_this.props.login);
        console.log(_this.state.userNameValue);
        _this.onlogout = _this.onlogout.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'onlogout',
        value: function onlogout(event) {
            event.preventDefault();
            console.log("Try logout!");
            this.props.logout();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'fixed' },
                this.state.userNameValue,
                React.createElement(
                    'a',
                    { 'class': 'btn btn-default', href: '/login', role: 'button' },
                    ' login '
                ),
                React.createElement(
                    'a',
                    { 'class': 'btn btn-default', href: '/signup', role: 'button' },
                    ' signup '
                ),
                React.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary logoutButton', onClick: this.onlogout },
                    'Logout'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(Header);