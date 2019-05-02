import React from 'react';
import {connect} from 'react-redux';

import Drawer from "../components/Drawer";

class DrawerContainer extends React.Component {
    clickCreateChannel(e) {
        e.preventDefault();
        console.log("create Channel");
    }

    render() {
        return this.props.drawer.isOpen? <Drawer clickCreateChannel={::this.clickCreateChannel}/> : null;
    }
}

function mapToPropsState(state) {
    return {"drawer": state.drawer};
}

export default connect(mapToPropsState)(DrawerContainer);