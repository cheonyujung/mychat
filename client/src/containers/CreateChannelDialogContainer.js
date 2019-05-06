import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import _ from 'lodash';

import CreateChannelDialog from "../components/CreateChannelDialog";

class CreateChannelDialogContainer extends React.Component {
    createChannel(e) {
        console.log(e.target.channelName.value);
        _.map(e.target.user, (u) => {
            console.log(u);
            if (u.checked)
                console.log("checked : " + u.value);
        });
        e.preventDefault();
    }

    render() {
        return this.props.isOpenedDialog ? <CreateChannelDialog users={this.props.users} createChannel={::this.createChannel}/> : null;
    }
}

export default connect(s => s.channel, d => {})(CreateChannelDialogContainer);