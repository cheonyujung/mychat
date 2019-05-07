import React from 'react';
import {connect} from 'react-redux';

import Drawer from "../components/Drawer";

class DrawerContainer extends React.Component {

    render() {
        return this.props.drawer.isOpen ? <Drawer/> : null;
    }
}

function mapToPropsState(state) {
    return {drawer: state.drawer, channel: state.channel};
}

export default connect(mapToPropsState)(DrawerContainer);