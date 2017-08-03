/**
 * Created by leslie on 2017/7/19.
 */
import {Provider} from 'react-redux';
import {store} from "../babel/store.js"
import Container1 from "../babel/container/container1.js";
import Header from "../babel/container/header.js";

export class Component1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="mainContent">
                <h1 className = "text-center">Login</h1>
                <Container1 />
            </div>
        );
    }
}

class Board extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <Component1 />
                </div>
            </Provider>);
    }
}

ReactDOM.render(<Board/>, document.getElementById('main'));
