import React from 'react';
import {connect} from "react-redux";

import ChannelList from "../components/ChannelList";

class ChannelListContainer extends React.Component {
    render() {
        const {names} = this.props;
        return <ChannelList channelNames={names}/>
    }
}

export default connect(s => s.channel)(ChannelListContainer);