import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveCurrentComment,addComment,undoCurrentComment,redoCurrentComment} from '../../babel/action/index.js';
//import Cookies from 'universal-cookie';
import {store} from "../../babel/store.js"

function mapStateToProps(state) {
    return ({
        login: state.login
    });
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addComment:addComment,saveCurrentComment:saveCurrentComment,undoCurrentComment:undoCurrentComment,redoCurrentComment:redoCurrentComment}, dispatch);
}

class ContainerMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username:"Vistor",inputText:"This text will show in the textarea"};
        this.onhandleTextChange = this.onhandleTextChange.bind(this);
        this.onTextFocus = this.onTextFocus.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onUndo = this.onUndo.bind(this);
        this.onRedo = this.onRedo.bind(this);
        this.onaddComment = this.onaddComment.bind(this);
    };
    onSave(event){
        //event.preventDefault();
        console.log("saveCurrentComment");
        this.props.saveCurrentComment(this.state.inputText);
    };
    onUndo(event){
        console.log("onUndo");
        this.props.undoCurrentComment();
    };
    onRedo(event){
        console.log("onRedo 22313");
        this.props.redoCurrentComment();
    };
    onaddComment(event){
        //event.preventDefault();
        console.log("On add comment!");
        this.props.addComment();
    };
    onTextFocus(event){
        console.log("on focus");
        //event.preventDefault();
        this.setState({inputText: ""});
    };
    onhandleTextChange(event){
        this.setState({inputText: event.target.value});
    };
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
                <textarea placeholder={this.state.inputText} value={this.state.inputText} onFocus={this.onTextFocus} onChange={this.onhandleTextChange}/>
                <button className="btn btn-primary commentButton" onClick={this.onSave}>Save</button>
                <button className="btn btn-primary commentButton" onClick={this.onUndo}>Undo</button>
                <button className="btn btn-primary commentButton" onClick={this.onRedo}>Redo</button>
                <button className="btn btn-primary commentButton" onClick={this.onaddComment}>Comment</button>
                <div>
                    {store.getState().saveCurrentCommentState.currentComment}
                </div>
                <div>
                    {store.getState().undoRedoCommentState.currentComment.currentComment}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(ContainerMain);