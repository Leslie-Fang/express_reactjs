import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from '../../babel/action/index.js';
//import Cookies from 'universal-cookie';
import {store} from "../../babel/store.js"

function mapStateToProps(state) {
    return ({
        login: state.login
    });
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch);
}

class ContainerMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username:"Vistor"};
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
                 hi,{store.getState().headerInitState}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(ContainerMain);