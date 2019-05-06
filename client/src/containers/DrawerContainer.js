import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import Drawer from "../components/Drawer";
import {openDialogForCreateChannel} from "../actions";

class DrawerContainer extends React.Component {
    clickCreateChannel(e) {
        e.preventDefault();
        this.props.openDialogForCreateChannel();
    }

    render() {
        return this.props.isOpen? <Drawer clickCreateChannel={::this.clickCreateChannel}/> : null;
    }
}

export default connect(s => s.drawer, d => bindActionCreators({openDialogForCreateChannel}, d))(DrawerContainer);