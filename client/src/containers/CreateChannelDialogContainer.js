import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import _ from 'lodash';

import {createChannel, closeDialogForCreateChannel} from "../actions";
import CreateChannelDialog from "../components/CreateChannelDialog";

class CreateChannelDialogContainer extends React.Component {
    readyForCreateChannel(e) {
        e.preventDefault();
        const channelName = e.target.channelName.value;
        let inviteUsers = [];
        _.map(e.target.user, (u) => {
            if (u.checked)
                inviteUsers.push(u.value);
        });
        this.props.createChannel(channelName, inviteUsers);
    }

    dismissDialog(e) {
        e.preventDefault();
        this.props.closeDialogForCreateChannel();
    }

    render() {
        return this.props.isOpenedDialog ?
            <CreateChannelDialog users={this.props.users} readyForCreateChannel={::this.readyForCreateChannel} closeDialog={::this.dismissDialog}/>
            : null;
    }
}

export default connect(s => s.channel, d => bindActionCreators({createChannel, closeDialogForCreateChannel}, d))(CreateChannelDialogContainer);