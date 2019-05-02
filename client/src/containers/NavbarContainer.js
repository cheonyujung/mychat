import React from 'react';
import {connect} from "react-redux";
import Navbar from "../components/Navbar"
import {bindActionCreators} from "redux";

import {openDrawer, closeDrawer} from "../actions";

class NavbarContainer extends React.Component {
    handleDrawer(e) {
        if (!this.props.drawer.isOpen) {
            this.props.openDrawer();
        } else {
            this.props.closeDrawer();
        }
    }

    render() {
        return <Navbar handleDrawer={::this.handleDrawer}/>
    }
}

function mapToPropsState(state) {
    return {"oauth": state.oauth, "drawer": state.drawer};
}

export default connect(mapToPropsState, d => bindActionCreators({openDrawer, closeDrawer}, d))(NavbarContainer);