'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _index = require('../../babel/action/index.js');

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _store = require('../../babel/store.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by leslie on 2017/7/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function mapStateToProps(state) {
    return {
        login: state.login,
        headerInitState: state.headerInitState
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ logout: _index.logout, headerInit: _index.headerInit }, dispatch);
}

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = { userNameValue: _this.props.headerInitState };
        /*  console.log("==============>");
          console.log(this.props.headerInitState);
          console.log(this.state.userNameValue);
          console.log("2==============>");*/
        _this.onlogout = _this.onlogout.bind(_this);
        _this.props.headerInit("Vistor");
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
            //console.log("bbbbbb");
            // console.log(this.props.user);
            var cookies = new _universalCookie2.default();
            /*  cookies.set('username', 'Pacman', { path: '/' });
              console.log(cookies.get('username'));*/
            console.log(cookies.get('username'));
            /* console.log(this.state.userNameValue);
             console.log("store.getState().headerInitState");
             console.log(store.getState().headerInitState);*/
            if (cookies.get('username')) {
                //this.state.userNameValue = cookies.get('username');
                return React.createElement(
                    'div',
                    { className: 'fixed' },
                    _store.store.getState().headerInitState,
                    React.createElement(
                        'a',
                        { className: 'logoutButton', href: '/', role: 'button' },
                        ' Main '
                    ),
                    React.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-primary logoutButton', onClick: this.onlogout },
                        'Logout'
                    )
                );
            } else {
                //this.state.userNameValue = this.props.login;
                return React.createElement(
                    'div',
                    { className: 'fixed' },
                    _store.store.getState().headerInitState,
                    React.createElement(
                        'a',
                        { className: 'login', href: '/login', role: 'button' },
                        ' Login '
                    ),
                    React.createElement(
                        'a',
                        { className: 'login', href: '/signup', role: 'button' },
                        ' Signup '
                    )
                );
            }
        }
    }]);

    return Header;
}(React.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(Header);