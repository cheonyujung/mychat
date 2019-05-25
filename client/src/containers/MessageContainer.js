import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getProfileByUser} from '../actions';

import MyMessage from "../components/MyMessage";
import OtherMessage from "../components/OtherMessage";

class MessageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    showProfile(e) {
        this.props.getProfileByUser(e.target.textContent);
    }

    render() {
        const {chat, oauth} = this.props;
        return _.map(chat.bodies, (v) => {
            if (v.id == oauth.profile.login)
                return <MyMessage body={v}/>;
            else
                return <OtherMessage body={v} showProfile={::this.showProfile}/>;
            });
    }
}

function mapToPropsState({chat, oauth}) {
    return {chat, oauth};
}

export default connect(mapToPropsState, d => bindActionCreators({getProfileByUser}, d))(MessageContainer);