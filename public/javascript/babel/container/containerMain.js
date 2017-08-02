'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _redux = require('redux');

require('../../babel/action/index.js');

var _store = require('../../babel/store.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Cookies from 'universal-cookie';


function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({}, dispatch);
}

var ContainerMain = function (_React$Component) {
    _inherits(ContainerMain, _React$Component);

    function ContainerMain(props) {
        _classCallCheck(this, ContainerMain);

        var _this = _possibleConstructorReturn(this, (ContainerMain.__proto__ || Object.getPrototypeOf(ContainerMain)).call(this, props));

        _this.state = { username: "Vistor" };
        return _this;
    }

    _createClass(ContainerMain, [{
        key: 'render',
        value: function render() {
            /*const cookies = new Cookies();
              console.log(cookies.get('username'));
              if(cookies.get('username')){
                  this.state.username = cookies.get('username');
              }else{
                  this.state.username = "Vistor";
              }*/
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    'hi,',
                    this.props.user
                ),
                React.createElement(
                    'div',
                    null,
                    'hi,',
                    _store.store.getState().headerInitState
                )
            );
        }
    }]);

    return ContainerMain;
}(React.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(ContainerMain);