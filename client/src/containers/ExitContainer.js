import React from 'react';
import {connect} from "react-redux";
import * as action from "../actions";
import Exit from "../components/Exit";


class ExitContainer extends React.Component {
    handleExit() {
        this.props.dispatch(action.exit("JCooky"));
    }

    render() {
        return (
            <Exit handleExit={::this.handleExit} />
        )
    }
}

function mapToPropsDispatch(dispatch) {
    return {dispatch};
}

export default connect(null, mapToPropsDispatch)(ExitContainer);