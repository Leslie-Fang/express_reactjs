/**
 * Created by leslie on 2017/7/21.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signup} from '../../babel/action/index.js';

function mapStateToProps(state) {
    return ({
        users: state.users
    });
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({signnup:signup}, dispatch);
}

class Container2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userNameValue: "please enter username",defaultUserNameValue: "please enter username",
            passwordValue: "please enter password",defaultPasswordValue: "please enter password"};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleusernameFocus = this.handleusernameFocus.bind(this);
        this.handleusernameChange = this.handleusernameChange.bind(this);
        this.handlepasswordFocus = this.handlepasswordFocus.bind(this);
        this.handlepasswordChange = this.handlepasswordChange.bind(this);
    }
    handleusernameChange(event) {
        this.setState({userNameValue: event.target.value});
        // console.log(event.target.value);
        // console.log(this.state.value);
    }
    handlepasswordChange(event) {
        this.setState({passwordValue: event.target.value});
        // console.log(event.target.value);
        // console.log(this.state.value);
    }
    handleSubmit(event) {
        event.preventDefault();
        //var codedata = "username:"+this.state.userNameValue +"password:"+this.state.passwordValue;
        if(!/^[A-Za-z0-9]+$/.test(this.state.userNameValue))
        {
            alert("用户名只能含有数字有字母!");
            return false;
        }
        if(!/^[A-Za-z0-9]+$/.test(this.state.passwordValue))
        {
            alert("密码只能含有数字有字母!");
            return false;
        }
        this.props.signnup(this.state.userNameValue,this.state.passwordValue);
    }
    handleusernameFocus(event){
        // console.log('Onfocus');
        this.setState({userNameValue: ""});
    }
    handlepasswordFocus(event){
        // console.log('Onfocus');
        this.setState({passwordValue: ""});
    }
    render() {
        return(
            <div>
                <form className = "text-center" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Username</label>
                        <input type="text" className="form-control" id="exampleInputUsername"
                               ref="verify"
                               value={this.state.userNameValue}
                               placeHolder={this.state.defaultUserNameValue}
                               onFocus={this.handleusernameFocus}
                               onChange={this.handleusernameChange}/>
                        <label for="exampleInputPassword1">Password</label>
                        <input type="text" className="form-control" id="exampleInputPassword"
                               ref="verify"
                               value={this.state.passwordValue}
                               placeHolder={this.state.defaultPasswordValue}
                               onFocus={this.handlepasswordFocus}
                               onChange={this.handlepasswordChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">signup</button>

                    <a class="btn btn-default" href="/" role="button">Back to main page</a>
                </form>
            </div>
        );
    }
}

//store.dispatch({ type: 'INCREMENT' });

export default connect(mapStateToProps,matchDispatchToProps)(Container2);