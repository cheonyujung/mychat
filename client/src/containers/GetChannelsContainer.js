import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {getChannels} from "../actions";

class GetChannelsContainer extends React.Component {
    render() {
        this.props.getChannels();
        return null;
    }
}

export default connect(null, d => bindActionCreators({getChannels}, d))(GetChannelsContainer);