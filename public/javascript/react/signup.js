/**
 * Created by leslie on 2017/7/19.
 */
import {Provider} from 'react-redux';
import {store} from "../babel/store.js"
import Container2 from "../babel/container/container2.js";
import Header from "../babel/container/header.js";

export class Component2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="mainContent">
                <h1 className = "text-center">Signup</h1>
                <Container2 />
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
                    <Header />
                    <Component2 />
                </div>
            </Provider>);
    }
}

ReactDOM.render(<Board/>, document.getElementById('main'));
