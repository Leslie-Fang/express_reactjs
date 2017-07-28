/**
 * Created by leslie on 2017/7/21.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logout} from '../../babel/action/index.js';

function mapStateToProps(state) {
    return ({
        users: state.users
    });
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({logout:logout}, dispatch);
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userNameValue: "please enter username",defaultUserNameValue: "please enter username",
            passwordValue: "please enter password",defaultPasswordValue: "please enter password"};
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
                <button type="submit" className="btn btn-primary logoutButton" onClick={this.onlogout}>Logout</button>
            </div>
        );
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(Header);