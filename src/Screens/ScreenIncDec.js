import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {decrement, increment} from "../AppState/actions/incDecActions";


class ScreenIncDec extends Component {
    render() {
        const value = this.props.value;


        return (
            <div style={{display : 'flex', flexDirection : 'row'}}>
                <button onClick={()=>this.props.inc()}>Increment</button>
                <label>{value}</label>
                <button onClick={()=>this.props.dec()}>Decrement</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const s = state.incDecReducer;
    return {
        value : s.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        inc : () => increment(),
        dec : () => decrement(),
    },dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenIncDec);
