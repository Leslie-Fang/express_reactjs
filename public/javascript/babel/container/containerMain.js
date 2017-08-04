'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _index = require('../../babel/action/index.js');

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
    return (0, _redux.bindActionCreators)({ addComment: _index.addComment, saveCurrentComment: _index.saveCurrentComment, undoCurrentComment: _index.undoCurrentComment, redoCurrentComment: _index.redoCurrentComment }, dispatch);
}

var ContainerMain = function (_React$Component) {
    _inherits(ContainerMain, _React$Component);

    function ContainerMain(props) {
        _classCallCheck(this, ContainerMain);

        var _this = _possibleConstructorReturn(this, (ContainerMain.__proto__ || Object.getPrototypeOf(ContainerMain)).call(this, props));

        _this.state = { username: "Vistor", inputText: "This text will show in the textarea" };
        _this.onhandleTextChange = _this.onhandleTextChange.bind(_this);
        _this.onTextFocus = _this.onTextFocus.bind(_this);
        _this.onSave = _this.onSave.bind(_this);
        _this.onUndo = _this.onUndo.bind(_this);
        _this.onRedo = _this.onRedo.bind(_this);
        _this.onaddComment = _this.onaddComment.bind(_this);
        return _this;
    }

    _createClass(ContainerMain, [{
        key: 'onSave',
        value: function onSave(event) {
            //event.preventDefault();
            console.log("saveCurrentComment");
            this.props.saveCurrentComment(this.state.inputText);
        }
    }, {
        key: 'onUndo',
        value: function onUndo(event) {
            console.log("onUndo");
            this.props.undoCurrentComment();
        }
    }, {
        key: 'onRedo',
        value: function onRedo(event) {
            console.log("onRedo 22313");
            this.props.redoCurrentComment();
        }
    }, {
        key: 'onaddComment',
        value: function onaddComment(event) {
            //event.preventDefault();
            console.log("On add comment!");
            this.props.addComment();
        }
    }, {
        key: 'onTextFocus',
        value: function onTextFocus(event) {
            console.log("on focus");
            //event.preventDefault();
            this.setState({ inputText: "" });
        }
    }, {
        key: 'onhandleTextChange',
        value: function onhandleTextChange(event) {
            this.setState({ inputText: event.target.value });
        }
    }, {
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
                    _store.store.getState().headerInitState.username
                ),
                React.createElement('textarea', { placeholder: this.state.inputText, value: this.state.inputText, onFocus: this.onTextFocus, onChange: this.onhandleTextChange }),
                React.createElement(
                    'button',
                    { className: 'btn btn-primary commentButton', onClick: this.onSave },
                    'Save'
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-primary commentButton', onClick: this.onUndo },
                    'Undo'
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-primary commentButton', onClick: this.onRedo },
                    'Redo'
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-primary commentButton', onClick: this.onaddComment },
                    'Comment'
                ),
                React.createElement(
                    'div',
                    null,
                    _store.store.getState().saveCurrentCommentState.currentComment
                ),
                React.createElement(
                    'div',
                    null,
                    _store.store.getState().undoRedoCommentState.currentComment.currentComment
                )
            );
        }
    }]);

    return ContainerMain;
}(React.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(ContainerMain);