import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from '../../babel/action/index.js';

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
        this.state = {};
    }
    render() {
        return(
            <div>
                <h1>HHH</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(ContainerMain);