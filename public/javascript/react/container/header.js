/**
 * Created by leslie on 2017/7/21.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logout,headerInit} from '../../babel/action/index.js';
import Cookies from 'universal-cookie';
import {store} from "../../babel/store.js"

function mapStateToProps(state) {
    return ({
        login: state.login,
        headerInitState: state.headerInitState
    });
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({logout:logout,headerInit:headerInit}, dispatch);
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userNameValue:this.props.headerInitState};
      /*  console.log("==============>");
        console.log(this.props.headerInitState);
        console.log(this.state.userNameValue);
        console.log("2==============>");*/
        this.onlogout = this.onlogout.bind(this);
        this.props.headerInit("Vistor");
    }
    onlogout(event){
        event.preventDefault();
        console.log("Try logout!");
        this.props.logout();
    }
    render() {
        //console.log("bbbbbb");
       // console.log(this.props.user);
        const cookies = new Cookies();
      /*cookies.set('username', 'Pacman', { path: '/' });
        console.log(cookies.get('username'));
        console.log(cookies.get('username'));
        console.log(this.state.userNameValue);
        console.log("store.getState().headerInitState.username");
        console.log(store.getState().headerInitState);
        console.log(store.getState().headerInitState.username);
        console.log("===========>");
        console.log(this.state.userNameValue);*/
        if(cookies.get('username')){
            //this.state.userNameValue = cookies.get('username');
            return(
                <div className="fixed">
                    {store.getState().headerInitState.username}
                    <a className="logoutButton" href="/" role="button"> Main </a>
                    <button type="submit" className="btn btn-primary logoutButton" onClick={this.onlogout}>Logout</button>
                </div>
            );
        }else{
            //this.state.userNameValue = this.props.login;
            return(
                <div className="fixed">
                    {store.getState().headerInitState.username}
                    <a className="login" href="/login" role="button"> Login </a>
                    <a className="login" href="/signup" role="button"> Signup </a>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(Header);