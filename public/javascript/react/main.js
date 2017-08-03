/**
 * Created by leslie on 2017/7/19.
 */
import {Provider} from 'react-redux';
import {store} from "../babel/store.js"
import Header from "../babel/container/header.js";
import ContainerMain from "../babel/container/containerMain.js";

export class ComponentMain extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="mainContent">
                <h1 className = "text-center">Main Page</h1>
                <ContainerMain />
            </div>
        );
    }
}

class Board extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        //console.log("asda");
        //console.log(store.getState());
        //console.log(store.getState().headerInitState);
        return (
            <Provider store={store}>
                <div className="container">
                    <Header user={store.getState().headerInitState}/>
                    <ComponentMain user={store.getState().headerInitState}/>
                </div>
            </Provider>);
    }
}

ReactDOM.render(<Board/>, document.getElementById('main'));
