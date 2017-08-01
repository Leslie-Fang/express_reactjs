/**
 * Created by leslie on 2017/7/21.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logout} from '../../babel/action/index.js';

function mapStateToProps(state) {
    return ({
        login: state.login
    });
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({logout:logout}, dispatch);
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userNameValue:this.props.login};
        console.log("==============>");
        console.log(this.props.login);
        console.log(this.state.userNameValue);
        this.onlogout = this.onlogout.bind(this);
    }
    onlogout(event){
        event.preventDefault();
        console.log("Try logout!");
        this.props.logout();
    }
    render() {
        return(
            <div className="fixed">
                {this.state.userNameValue}
                <a class="btn btn-default" href="/login" role="button"> login </a>
                <a class="btn btn-default" href="/signup" role="button"> signup </a>
                <button type="submit" className="btn btn-primary logoutButton" onClick={this.onlogout}>Logout</button>
            </div>
        );
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(Header);