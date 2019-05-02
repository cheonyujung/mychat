import React from 'react';
import {connect} from "react-redux";

import Main from '../components/Main';

class MainContainer extends React.Component {
    render() {
        return <Main isDrawerOpened={this.props.drawer.isOpen}/>
    }
}

function mapToPropsState(state) {
    return {"drawer" : state.drawer};
}

export default connect(mapToPropsState)(MainContainer);