import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addComment} from '../../babel/action/index.js';
//import Cookies from 'universal-cookie';
import {store} from "../../babel/store.js"

function mapStateToProps(state) {
    return ({
        login: state.login
    });
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addComment:addComment}, dispatch);
}

class ContainerMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username:"Vistor"};
        this.onaddComment = this.onaddComment.bind(this);
    }
    onaddComment(event){
        event.preventDefault();
        console.log("On add comment!");
        this.props.addComment();
    }
    render() {
      /*const cookies = new Cookies();
        console.log(cookies.get('username'));
        if(cookies.get('username')){
            this.state.username = cookies.get('username');
        }else{
            this.state.username = "Vistor";
        }*/
        return(
            <div>
                <div>
                 hi,{this.props.user}
                </div>
                <div>
                 hi,{store.getState().headerInitState.username}
                </div>
                <button className="btn btn-primary commentButton" onClick={this.onaddComment}>Comment</button>
            </div>
        );
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(ContainerMain);